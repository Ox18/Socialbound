import { Repository } from "../lib/repository";

export class AccountRepository extends Repository {
    constructor() {
        super();
        this.model = this.db.Account;
    }
}