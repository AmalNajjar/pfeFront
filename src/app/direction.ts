import { LieuArchive } from "./lieu-archive";
export class Direction {
    id!: number; 
    libelleDirection!:string;
    codedirection!: string; 
    typeDirections!:string;
    lieu_d_archivage_1_ere_age!:LieuArchive;
    lieu_d_archivage_2_eme_age!:LieuArchive;
    constructor(){}
}
