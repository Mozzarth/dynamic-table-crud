import express, { Application } from "express";
import { CONFIG } from './config/config'


export class Server {
    private static instance: Server
    public app: Application;

    private port: number

    private constructor() {
        this.app = express();
        this.port = Number(CONFIG.PORT);
    }

    public static get getInstance() {
        return this.instance || (this.instance = new this())
    }


    public async start() {
        try {
            this.app.listen(Number(this.port), () => {
                console.log(`Server running on http://localhost:${this.port}`)
            })
            return
        } catch (error) { throw error }
    }


}
