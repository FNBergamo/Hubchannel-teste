import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Calculator calculator = new Calculator();

        System.out.println("Escolha uma operação:");
        System.out.println("1. Soma");
        System.out.println("2. Subtração");
        System.out.println("3. Multiplicação");
        System.out.println("4. Divisão");
        int escolha = scanner.nextInt();

        System.out.println("Insira o primeiro número:");
        double num1 = scanner.nextDouble();
        System.out.println("Insira o segundo número:");
        double num2 = scanner.nextDouble();

        double resultado;

        switch (escolha) {
            case 1:
                resultado = calculator.add(num1, num2);
                System.out.println("Resultado da soma: " + resultado);
                break;
            case 2:
                resultado = calculator.subtract(num1, num2);
                System.out.println("Resultado da subtração: " + resultado);
                break;
            case 3:
                resultado = calculator.multiply(num1, num2);
                System.out.println("Resultado da multiplicação: " + resultado);
                break;
            case 4:
                resultado = calculator.divide(num1, num2);
                System.out.println("Resultado da divisão: " + resultado);
                break;
            default:
                System.out.println("Opção inválida.");
        }

        scanner.close();
    }
}