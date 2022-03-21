import { Offre } from "./offre";

export class Recruteur{


    id  !: number ;


    username !: string;

    nom  !: string;

   prenom  !: string;

     naissance  !: Date;

     enabled  !: boolean;

    role      !: string;

    offres !: Offre[] ; 


}