export class User
{
    id : number;
    username: string;
    email: string;
<<<<<<< HEAD
    motto: string;
    look: string;
    rank: number;
    auth_ticket : string;
    web_bg : string;

    constructor(id = 0, username = '', email = '', rank = 1, motto = '', look = '', auth_ticket = '')
=======
    rank: number;

    constructor(id = 0, username = '', email = '', rank = 1)
>>>>>>> 9266f973b0957821c6a96341aaf0c69e0df6ae65
    {
        this.id = id;
        this.username = username;
        this.email = email;
<<<<<<< HEAD
        this.motto = motto;
        this.look = look;
        this.rank = rank;
        this.auth_ticket = auth_ticket;
        this.web_bg = '';
    }

    setBackground(web_bg)
    {
        this.web_bg = web_bg;
=======
        this.rank = rank;
>>>>>>> 9266f973b0957821c6a96341aaf0c69e0df6ae65
    }
}