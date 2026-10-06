/*Scrivere un programma che chieda all'utente quanti valori vuole inserire. leggere i valori come numeri in virgola
mobile (float). Si assuma che i valori inseriti rappresentino interi.
Stampare quanti valori pari e dispari ci sono.*/

#include <stdio.h>

int main(void){
    int temp;
    int x;
    int cnt = 0;
    printf("Welcome, input array length to begin input!\n");
    do {
        printf("Array length:");
        scanf("%d",&x);
        if(x <= 0)
            printf("Invalid number. Try again.");
    } while (x <= 0);
    float numbers[x];
    while(cnt<x) {
        scanf("%d",&temp);
        numbers[cnt] = (float) temp;
        cnt++;
    }
    cnt = x-1;
    printf("Here are your numbers:");
    while(cnt>=0) {
        printf("%.2f\n",numbers[cnt]);
        cnt--;
    }
    return 0;
}