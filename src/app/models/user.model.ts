export class User
{
    id : number;
    username: string;
    email: string;
    rank: number;

    constructor(id = 0, username = '', email = '', rank = 1)
    {
        this.id = id;
        this.username = username;
        this.email = email;
        this.rank = rank;
    }
}