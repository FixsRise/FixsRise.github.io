// ConsoleApplication4.cpp : Этот файл содержит функцию "main". Здесь начинается и заканчивается выполнение программы.
//

#include <iostream>
using namespace std;

int main()
{
    
    int a[2][9] = {
             {201,203,203,203,203,203,203,203,187},
         {200,202,202,202,202,202,202,202,188 }
    };

    for (int i = 0; i < 2; i++) {

        for (int j = 0; j < 9; j++)

            cout << static_cast<char>(a[i][j]);
        cout << endl;

    }
    
    return 0;


    system("pause");
}
