/*
Scrivere un programma che legge due vettori di dimensione 10 e fa il prodotto scalare tra i due vettori.
*/

#include <stdio.h>

#define N 10

int main(void){
    int x[N];
    int y[N];
    int result[N];
    int i = 0;

    printf("Input the first array's numbers:\n");
    for(i = 0; i < N; i++) {
        scanf("%d",&x[i]);
    }

    printf("Input the second array's numbers:\n");
    for(i = 0; i < N; i++) {
        scanf("%d",&y[i]);
    }

    printf("Elaborating product...");
    for(i=0;i<N;i++) {
        result[i] = x[i] * y[i];
    }

    printf("RESULT:\n");
    printf("First array: [");
    for(i=0;i<N;i++) {
        printf("%d",x[i]);
        printf(",");
    }
    printf("]\n");
    printf("Second array: [");
    for(i=0;i<N;i++) {
        printf("%d",y[i]);
        printf(",");
    }
    printf("]\n");
    printf("Resulting product array: [");
    for(i=0;i<N;i++) {
        printf("%d",result[i]);
        printf(",");
    }
    printf("]");
    return 0;
}