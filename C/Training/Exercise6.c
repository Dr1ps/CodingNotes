/*Scrivere un programma che legge due matrici quadrate di dimensione 10x10 e fa il prodotto scalare. */

#include <stdio.h>

#define N 2

int main(void) {
    int mat1[N][N];
    int mat2[N][N];
    int result[N][N];
    int i = 0,j = 0;

    printf("Print the first matrix of numbers (row by row):");
    for(i=0;i<N;i++) {
        for(j=0;j<N;j++) {
            scanf("%d",&mat1[i][j]);
        } 
    }

    printf("Print the second matrix of numbers (row by row):");
    for(i=0;i<N;i++) {
        for(j=0;j<N;j++) {
            scanf("%d",&mat2[i][j]);
        }
    }

    printf("Elaborating product...");
    for(i=0;i<N;i++) {
        for(j=0;j<N;j++) {
            result[i][j] = mat1[i][j] * mat2[i][j];
        }
    }

    printf("Resulting matrix (product):\n");
    for(i=0;i<N;i++) {
        for(j=0;j<N;j++) {
            printf(" %d",result[i][j]);
        }
        printf("\n");
    }

    return 0;
}