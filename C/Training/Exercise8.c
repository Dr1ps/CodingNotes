/*Scrivere un programma di gestione dell'anagrafe dei dipendenti
di un'azienda.
Per ogni dipendente leggere:
- ID
- Età
- Stipendio
- Ruolo
Il ruolo va rappresentato con un enum:
0 - Dirigente
1 - Quadro
2 - Operaio
3 - Impiegato
Stampare codice, eta e ruolo dei lavoratori che guadagnano meno dello stipendio medio.
Il numero di partecipanti è un numero fisso N.
Per ogni dipendente garantire che ID sia unico.
Tutto deve essere messo in input.*/

#include <stdio.h>
#include <stdbool.h>


#define N 5

enum Ruolo {
    Dirigente,
    Quadro,
    Operaio,
    Impiegato
};

struct Dipendente {
    int ID;
    int eta;
    float stipendio;
    enum Ruolo ruolo;
};

int main(void) {

    struct Dipendente dipendenti[N];

    printf("Welcome, let's input all the workers.\n");
    for(int i=0;i<N;i++) {
        int id;
        int eta;
        float stipendio;
        int roleid;
        bool check;
        printf("WORKER %d\n",i);
        do {
            check = true;
            printf("Input ID: \n");
            scanf("%d",&id);
            for(int j=0;j<i;j++) {
                if(dipendenti[j].ID == id) {
                    printf("ID already taken, choose another.\n");
                    check = false;
                }
            }
        } while(!check);
        
        printf("Input age: \n");
        scanf("%d",&eta);
        printf("Input salary: \n");
        scanf("%f",&stipendio);
        do {
            check = true;
            printf("Input role id: \n");
            scanf("%d",&roleid);
            if(roleid > 3 || roleid < 0) {
                printf("Nonexistent role, try again\n");
                check = false;
            }
        } while (!check);
        struct Dipendente nuovo;
        nuovo.ID = id;
        nuovo.eta = eta;
        nuovo.stipendio = stipendio;
        nuovo.ruolo = roleid;
        dipendenti[i] = nuovo;
    }

    float averageSalary = 0;
    for(int i=0;i<N;i++) {
        averageSalary+=dipendenti[i].stipendio;
    }
    averageSalary = averageSalary / N;
    printf("\n\nWORKERS THAT ARE PAID LESS THAN AVERAGE:\n");
    for(int i=0;i<N;i++) {
        if(dipendenti[i].stipendio < averageSalary) {
            printf("WORKER: %d\n",dipendenti[i].ID);
            printf("\tage: %d\n",dipendenti[i].eta);
            switch (dipendenti[i].ruolo) {
                case Dirigente:
                    printf("\trole: Dirigente\n");
                    break;

                case Quadro:
                    printf("\trole: Quadro\n");
                    break;

                case Operaio:
                    printf("\trole: Operaio\n");
                    break;

                case Impiegato:
                    printf("\trole: Impiegato\n");
                    break;
            }
        }
    }

    return 0;
}