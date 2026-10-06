/*Scrivere un programma che inverta gli elementi di un array di interi A di dimensione 10.
Si deve utilizzare un array di appoggio. Stampare il risultato.*/

#include <stdio.h>

#define N 10

int main (void) {

    int a[N];
    int inverted[N];

    printf("Input the array number by number to be inverted:\n");
    for(int i = 0;i<N;i++) {
        scanf("%d",&a[i]);
    }
    
    printf("Inverting the array...\n");
    for(int i = 0;i<N;i++) {
        inverted[i] = a[N - 1 - i];
    }

    printf("Inverted array:\n");
    for(int i = 0;i<N;i++) {
        printf("%d ",inverted[i]);
    }

    return 0;
}