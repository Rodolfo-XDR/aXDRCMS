import { Component, OnInit, Injector } from '@angular/core';
import { Location } from '@angular/common';
import { BaseComponent } from '../../base/base.component';
declare var window;
declare var document;

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent extends BaseComponent implements OnInit {

  isFullscreen: boolean = false;
  flashEnabled: boolean = false;
  sso: string = null;
  loading: boolean = false;
  message: string = 'Getting Ready';
  done: boolean = false;

  constructor(injector : Injector, private location : Location) {
    super(injector);
  }

  async ngOnInit() {

    try {
      await this.checkFlash();
      await this.startClient();
      await this.loadInterface();

      window.addEventListener("message", this.processMessage);
    }
    catch(err) {

    }

    /*this.loadClient();
    
    window.HabboFlashClient = {
        started: false,
        flashInterface: document.getElementById("client"),
        init: () =>
        {
            document.getElementById("client") || console.error('Invalid FlashClient. Unable to initialize FlashInterface');
            window.HabboFlashClient.started = true;
        }
    };

    this.loadFlashExternalInterface();
    window.addEventListener("message", this.processMessage);
    window.addEventListener("load", window.HabboFlashClient.init());*/
    
  }

  async checkFlash()
  {
    if(swfobject.hasFlashPlayerVersion('10'))
    {
      this.flashEnabled = true;
      return Promise.resolve();
    }

    this.flashEnabled = false;

    return Promise.reject(Error('flash_disabled'));
  }

  async startClient()
  {
    if(this.flashEnabled)
    {
      let oldClient : HTMLElement = document.getElementById('client-area');

      if(oldClient != undefined || null)
        oldClient.remove();

      let client : HTMLElement = document.createElement('div');
      client.id = 'client-area';

      document.getElementById('client-container').appendChild(client);  
      this.sso = null;
      this.loading = true;
      this.message = 'Getting Ready';
      this.done = false;

      this.sso = this.getHabbo().auth_ticket;

      await this.buildClient();
    }
  }

  async buildClient()
  {
    let variables: Object = {
      "connection.info.host"          : "127.0.0.1",
      "connection.info.port"          : 30000,
      "url.prefix"                    : "http://localhost:4200/",
      "site.url"                      : "http://localhost:4200/",
      "client.reload.url"             : "http://localhost:4200/client",
      "client.fatal.error.url"        : "http://localhost:4200/client",
      "client.connection.failed.url"  : "http://localhost:4200/client",
      "external.variables.txt"        : "http://localhost/swf/gamedata/external_variables/2.txt",
      "external.texts.txt"            : "http://localhost/swf/gamedata/external_flash_texts/1.txt",
      "productdata.load.url"          : "http://localhost/swf/gamedata/productdata/1.txt",
      "furnidata.load.url"            : "http://localhost/swf/gamedata/furnidata_xml/5.xml",
      "external.figurepartlist.txt"   : "http://localhost/swf/gamedata/figuredata/1.xml",
      "client.starting.revolving"     : "Para ciencia, \u00A1T\u00FA, monstruito!\/Cargando mensajes divertidos... Por favor, espera.\/\u00BFTe apetecen salchipapas con qu\u00E9?\/Sigue al pato amarillo.\/El tiempo es s\u00F3lo una ilusi\u00F3n.\/\u00A1\u00BFTodav\u00EDa estamos aqu\u00ED?!\/Me gusta tu camiseta.\/Mira a la izquierda. Mira a la derecha. Parpadea dos veces. \u00A1Ta-ch\u00E1n!\/No eres t\u00FA, soy yo.\/Shhh! Estoy intentando pensar.\/Cargando el universo de p\u00EDxeles.",
      "use.sso.ticket"                : "1",
      "sso.ticket"                    : this.sso,
      "processlog.enabled"            : "1",
      "flash.client.url"              : "http://localhost/swf/gordon/PRODUCTION-201805071207-546529762/",
      "flash.client.origin"           : "popup",
      "client.allow.cross.domain"     : "1",
      "client.notify.cross.domain"    : "0"
    };

    let params = {
        "base"              : "http://localhost/swf/gordon/PRODUCTION-201805071207-546529762/",
        "allowScriptAccess" : "always",
        "menu"              : "false"
    };

    swfobject.embedSWF("http://localhost/swf/gordon/PRODUCTION-201805071207-546529762/arcturus.swf", "client-area", "100%", "100%", "10.0.0", "", variables, params, null);
  }

  processMessage(data: any)
  {
      let client: any = document.getElementById('client-area');

      if(data.data.call == 'open-room') return client.openlink('navigator/goto/' + data.data.target);
      if(data.data.call == 'open-group') return client.openlink('group/' + data.data.target);
      if(data.data.call == 'open-inventory') return client.openlink('inventory/open/' + data.data.target); // targets: [furni, badges]
      if(data.data.call == 'update-figure') return client.openlink('avatareditor/open');
      if(data.data.call == 'find-friends') return client.openlink('friendbar/findfriends');
      if(data.data.call == 'open-link') return client.openlink(data.data.target);
  }

  goBack()
  {
    this.location.back();
  }

  async loadInterface()
  {
      window.parent.FlashExternalInterface                = {};
      
      window.parent.FlashExternalInterface.disconnect     = () => console.log('disconnect');
      
      window.parent.FlashExternalInterface.logout         = () => document.getElementById("clientLogout").click();
      
      window.parent.FlashExternalInterface.openHabblet    = (page) => 
      { 
        if(page == 'avatars')
          console.log('Open Habblet Avatars');
      }

      window.parent.FlashExternalInterface.track = (action, label, value) => console.log(action + label + value);
      window.parent.FlashExternalInterface.legacyTrack = (action, label, value) => console.log(action + label + value);

      window.parent.FlashExternalInterface.logLoginStep = (step: string) =>
      {
        if(step == 'client.init.core.init') this.message = 'Connecting';
        if(step == 'client.init.handshake.start') this.message = 'Connected';
        if(step == 'client.init.auth.ok') this.message = 'Authenticating';
        if(step == 'client.init.core.running') this.message = 'Gathering Assets';

        if(step == 'client.init.config.loaded')
        {
            this.message = 'Almost Ready';

            return setTimeout(() =>
            {
                this.loading = false;
                this.done = true;
            }, 4000);
        }
      }

      return Promise.resolve();
  }
}
