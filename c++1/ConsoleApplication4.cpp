// ConsoleApplication4.cpp : Этот файл содержит функцию "main". Здесь начинается и заканчивается выполнение программы.
//

#include <iostream>
using namespace std;

int main()
{
    
    int n, n1, n2, n3, n4, n5;

    setlocale(LC_ALL, "Russian");
    
    start:

    cout << "Введите пятизначное число : ";

    cin >> n;

    n1 = n/10000;
    n2 = (n % 10000) / 1000;
    n3 = (n % 1000) / 100;
    n4 = (n % 100) / 10;
    n5 = n % 10;

    if (n > 9999 && n < 100000) {


        cout << "1 цифра = " << n1;
        cout << endl;
        cout << "2 цифра = " << n2;
        cout << endl;
        cout << "3 цифра = " << n3;
        cout << endl;
        cout << "4 цифра = " << n4;
        cout << endl;
        cout << "5 цифра = " << n5;
        cout << endl;

    }
    else {
     
        cout << "Вы ввели не пятизначное число";
        cout << endl;
        goto start;

    }

    int menu_num;
    menu:
    cout << "\n1 - Продолжить работу\n2 - Выход\n\nСделайте выбор (1 или 2): ";
    cin >> menu_num;
    switch (menu_num)
    {
    case 1: {goto start; break;}
    case 2: {return 0; break;}
    default: {cout << "\nБудьте внимательнее!\n"; goto menu;}
    }




    system("pause");
}
