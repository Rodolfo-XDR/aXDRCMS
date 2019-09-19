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

  constructor(injector : Injector, private location : Location) {
    super(injector);
  }

  ngOnInit() {
    this.loadClient();
    
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
    window.addEventListener("load", window.HabboFlashClient.init());
    
  }

  goBack()
  {
    this.location.back();
  }

  loadClient()
  {
    this.ping()
    .then((res) => {
      let flashVars = {
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
        "sso.ticket"                    : this.getHabbo().auth_ticket,
        "processlog.enabled"            : "0",
        "flash.client.url"              : "http://localhost/swf/gordon/PRODUCTION-201805071207-546529762/",
        "flash.client.origin"           : "popup",
        "client.allow.cross.domain"     : "1",
        "client.notify.cross.domain"    : "0",
        "has.identity"                  : "1",
        "spaweb"                        : "1",
        "unique_habbo_id"               : this.getHabbo().id,
        "account_id"                    : this.getHabbo().id,
    };
  
    let params = {
        "base"              : "http://localhost/swf/gordon/PRODUCTION-201805071207-546529762/",
        "allowScriptAccess" : "always",
        "menu"              : "false"
    };
  
  
      swfobject.embedSWF("http://localhost/swf/gordon/PRODUCTION-201805071207-546529762/arcturus.swf", "client", "100%", "100%", "10.0.0", "", flashVars, params, null);
    })
    .catch((err) =>
    {
        return err;
    });
  }

  loadFlashExternalInterface()
  {
      window.parent.FlashExternalInterface                = {};
      window.parent.FlashExternalInterface.disconnect     = () => this.loadClient();
      window.parent.FlashExternalInterface.logout         = () => document.getElementById("clientLogout").click();
      //window.parent.FlashExternalInterface.openAvatars    = () => this.$state.go('home.settings.general');
      window.parent.FlashExternalInterface.openMinimail   = () => console.log('openMinimail');
      //window.parent.FlashExternalInterface.openHabblet    = (page) => { if(page == 'avatars') this.$state.go('home.settings.general'); }
      window.parent.FlashExternalInterface.legacyTrack    = (action, label, value) => {

      if(action == 'authentication' && label == 'authok')
      {
          localStorage.currentUser.habbo.online = '1';
      }
    }


      //window.parent.FlashExternalInterface.heartBeat           = () => console.log('heartBeat');
      //window.parent.FlashExternalInterface.closeHabblet        = (n) => console.log(n);
      //window.parent.FlashExternalInterface.track               = (action, label, value) => console.log(action + ' ' + label + ' ' + value);
      //window.parent.FlashExternalInterface.logCrash            = (crash) => console.log('crash ' + crash);
      //window.parent.FlashExternalInterface.logDebug            = (debug) => console.log('debug ' + debug);
      //window.parent.FlashExternalInterface.logError            = (error) => console.log('error ' + error);
      //window.parent.FlashExternalInterface.logWarn             = (warn) => console.log('warn ' + warn);
      //window.parent.FlashExternalInterface.showInterstitial    = () => console.log('showInterstitial');
      //window.parent.FlashExternalInterface.updateFigure        = () => console.log('updateFigure');
      //window.parent.FlashExternalInterface.updateName          = () => console.log('updateName');
      //window.parent.FlashExternalInterface.openNews            = () => console.log('openNews');
      //window.parent.FlashExternalInterface.subscriptionUpdated = (subscription) => console.log('subscription ' + subscription);
      //window.parent.FlashExternalInterface.openExternalPage    = (page) => console.log(page);
      //window.parent.FlashExternalInterface.openPage            = (page) => console.log('go page' + page);
      //window.parent.FlashExternalInterface.openWebHabblet      = (page) => console.log('go web hablet' + page);
  }

  processMessage(data)
  {
      if(data.data == undefined || null) return;
      if(data.data.call == undefined || null) return;
      if(data.data.target == undefined || null) return;

      if(data.data.call == 'open-link') return document.getElementById("client").openlink(data.data.target);
      if(data.data.call == 'open-room') return document.getElementById("client").openlink('navigator/goto/' + data.data.target);
  }

}
