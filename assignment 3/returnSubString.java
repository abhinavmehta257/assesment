//get input a string and a letter and return the substring of the string that starts with the letter
import java.util.*;  
public class returnSubString {
	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		System.out.println("Enter a string: ");
		String str = input.nextLine();
		System.out.println("Enter a letter: ");
		String letter = input.nextLine();
		String subStr = "";
		int index = str.indexOf(letter);
		if (index != -1) {
			subStr = str.substring(index);
			System.out.println(subStr);
		}
		else {
			System.out.println("No substring");
		}
	}
}