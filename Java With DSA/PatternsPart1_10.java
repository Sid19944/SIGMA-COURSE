import java.util.*;

public class PatternsPart1_10 {
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter Number : ");
        int n = sc.nextInt();

        // // Star pattern
        // for(int i=0; i<n; i++){
        //     for(int j =0; j<=i; j++){
        //         System.out.print("*");
        //     }
        //     System.out.println();
        // }


        // // Print Inverter-star pattern
        // for(int i =0; i<n; i++){
        //     for(int j=n; j>i; j--){
        //         System.out.print("*");
        //     }
        //     System.out.println();
        // }

        // // Print Half-Pyramid pattern
        // for(int i = 1; i<=n; i++){
        //     for(int j =1; j<=i; j++){
        //         System.out.print(j);
        //     }
        //     System.out.println();
        // }

        // // Print Character pattern
        // char c = 'A';
        // for(int i = 0; i<n; i++){
        //     for(int j =0; j<=i; j++){
        //         System.out.print(c);
        //         c++;
        //     }
        //     System.out.println();
        // }


        // // hollow rectangle pattern
        // for(int i = 1; i<n; i++){
        //     for(int  j =1; j<=n; j++){
        //         if(i == 1 || i == n-1 || j == 1 || j==n) {
        //             System.out.print("*");
        //         } else {
        //             System.out.print(" ");
        //         }
        //     }
        //     System.out.println();
        // }

        // // Inverted & Rotated half-pyramid pattern
        // for(int  i =1; i<=n; i++){
        //     for(int j=1; j <=n-i; j++){
        //         System.out.print(" ");
        //     }
        //     for(int j=n-i+1; j <=n; j++){
        //         System.out.print("*");
        //     }
        //     System.out.println();
        // }


        // // Floyd's Tringle pattern
        // int count = 1;
        // for(int  i =1; i<=n; i++){
        //     for(int j=1; j <=i; j++){
        //         System.out.print(count + " ");
        //         count++;
        //     }
        //     System.out.println();
        // }
        
        // // 0-1 Triangle pattern
        // for(int  i =1; i<=n; i++){
        //     for(int j=1; j <=i; j++){
        //         if((i+j)%2 == 0){
        //         System.out.print("1");
        //         }
        //         else{
        //             System.out.print("0");
        //         }
        //     }
        //     System.out.println();
        // }

        // // Butterfly pattern
        // for(int i = 1; i<=n; i++){
        //     for(int j = 1; j <= n*2;j++){
        //         if(j<=i || j>n*2-i){
        //             System.out.print("* ");
        //         }else{
        //             System.out.print("  ");
        //         }
        //     }
        //     System.out.println();
        // }
        // for(int i = n; i>=1; i--){
        //     for(int j = 1; j <= n*2;j++){
        //         if(j>i && j<=(n*2)-i){
        //             System.out.print("  ");
        //         }else{
        //             System.out.print("* ");
        //         }
        //     }
        //     System.out.println();
        // }


        // // Solid Phombus pattern
        // for(int i = 1; i<=n; i++){
        //     for(int j = 1; j <= (n*2)-i;j++){
        //         if(j>(n-i)){
        //             System.out.print("* ");
        //         }else{
        //             System.out.print("  ");
        //         }
        //     }
        //     System.out.println();
        // }

        // // Hallow Rhombus pattern
        // for(int i = 1; i<=n; i++){
        //     for(int j = 1; j <= (n*2)-i;j++){
        //         if(j==(n-i)+1 || j==(n*2)-i || (j>(n-i) && i ==1) || i == n){
        //             System.out.print("* ");
        //         }else{
        //             System.out.print("  ");
        //         }
        //     }
        //     System.out.println();
        // }

        // // // Diamond pattern
        // for(int i =1; i <=n; i++){
        //     for(int j =1; j<(n+i); j++){
        //         if(j>n-i)
        //             System.out.print("* ");
        //         else{
        //             System.out.print("  ");
        //         }
        //     }
        //     System.out.println();
        // }
        // for(int i =n; i >=1; i--){
        //     for(int j =1; j<=(n+i); j++){
        //         if(j>(n-i)+1)
        //             System.out.print("* ");
        //         else{
        //             System.out.print("  ");
        //         }
        //     }
        //     System.out.println();
        // }


        // // // Number pyramid pattern
        // for(int i=1; i <=n; i++){
        //     for(int j=1; j<=(n+i)-1; j++){
        //         if(j>(n-i)){
        //             if((i+j)%2!=0){
        //                 System.out.print(" ");
        //             }else{
        //                 System.out.print(i);
        //             }
        //         }
        //         else{
        //             System.out.print(" ");
        //         }
        //     }
        //     System.out.println();
        // }


        //Palindromic pattern with number pattern
        for(int i=1; i <=n; i++){
            for(int j=1; j<=(n+i)-1; j++){
                if(j>(n-i)){
                    System.out.print(Math.abs(n-j)+1);
                }
                else{
                    System.out.print(" ");
                }
            }
            System.out.println();
        }

        // System.out.print(Math.abs(-1)+1);

    }
}