import SERVER_OPCODE from "../consts/SERVER_OPCODE";

import Server from "../Server";
import Packet from "../util/Packet";

class ClientManagement{
    hash_connection: string = "";
    use_auth: number = 0;
    version_encrypted: number = 0;
    user_id: number = 0;
    version_client_web: number = 0;
    user_last_location: number = 0;
    version_file_js: string = "";

    constructor(
        public connection: any,
        public contextServer: Server,
    ){
        connection.on("message", this.onMessage.bind(this));
        connection.on("close", this.onClose.bind(this));
        connection.on("error", this.onError.bind(this));
        connection.on("open", this.onOpen.bind(this));
        this.init();
    }

    onMessage(message: any){
        const data: Array<any> = Packet.DecodeBuffer(message);
        const MESSAGE_ID = data[0];
        const MESSAGE_DATA = data.slice(1);
        this.processMessage(MESSAGE_ID, MESSAGE_DATA);
    }

    onClose(...args: any){
        // console.log(args);
    }

    onError(){
        throw new Error("OnError is not implemented");
    }

    onOpen(){
        throw new Error("OnOpen is not implemented");
    }

    init(){
        const { name, server_type, server_subtype  } = this.contextServer;
        const version = 133;
        const dataArray = [SERVER_OPCODE.hi, version, name, server_type, server_subtype];
        this.sendBuffer(dataArray);
    }

    processMessage(MESSAGE_ID: Number, MESSAGE_DATA: Array<any>){
        throw new Error("ProcessMessage is not implemented");
    }

    sendMessage(MESSAGE_ID: Number, MESSAGE_DATA: Array<any>){
        const data = [MESSAGE_ID, ...MESSAGE_DATA];
        this.connection.send(Packet.EncodeArray(data));
    }

    sendUTF8(data: string){
        this.connection.send(data);
    }

    sendBuffer(dataArray: Array<any>){
        this.connection.send(Packet.Encode(...dataArray));
    }
}

export default ClientManagement;