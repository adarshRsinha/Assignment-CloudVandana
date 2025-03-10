//Write a Java program that takes two strings as input and checks if they are anagrams (containing the same characters in a different order).

import java.util.Arrays;
import java.util.Scanner;

public class Anagram_Check{
    public static boolean checkAnagram(String str1, String str2){
        if(str1.length()!=str2.length()){
            return false;
        }

        //First convert the string to character array and sort them
        char[] arr1=str1.toCharArray();
        char[] arr2=str2.toCharArray();

        Arrays.sort(arr1);
        Arrays.sort(arr2);

        for(int i=0; i<arr1.length; i++){
            if(arr1[i]!=arr2[i]){
                return false;
            }
        }

        return true;
    }

    public static void main(String[] args){
        Scanner s=new Scanner(System.in);

        System.out.println("Enter the first string: ");
        String str1=s.nextLine();

        System.out.println("Enter the second string: ");
        String str2=s.nextLine();

        if(checkAnagram(str1, str2)){
            System.out.println("True");
        }
        else{
            System.out.println("False");
        }

        s.close();
    }
}