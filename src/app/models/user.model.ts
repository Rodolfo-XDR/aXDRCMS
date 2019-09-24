export class User
{
    id : number;
    username: string;
    email: string;
    motto: string;
    look: string;
    rank: number;
    auth_ticket : string;
    web_bg : string;

    constructor(id = 0, username = '', email = '', rank = 1, motto = '', look = '', auth_ticket = '')
    {
        this.id = id;
        this.username = username;
        this.email = email;
        this.motto = motto;
        this.look = look;
        this.rank = rank;
        this.auth_ticket = auth_ticket;
        this.web_bg = '';
    }

    setBackground(web_bg)
    {
        this.web_bg = web_bg;
    }
}