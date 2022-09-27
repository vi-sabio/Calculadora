import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  primeirovalor = '';
  segundovalor = '';
  resultado = '';
  operacao = '';

 constructor(private alertController: AlertController) {}

  async somar(){
    this.resultado = (parseFloat(this.primeirovalor)+parseFloat(this.segundovalor)).toString();
      this.operacao='Soma';

      const alert = await this.alertController.create({
        header: 'Resultado: ',
        message: `${this.primeirovalor} + ${this.segundovalor} = ${this.resultado}`,
        buttons: ['OK'],
      });

      await alert.present();
    }

  async subtrair(){
    this.resultado = (parseFloat(this.primeirovalor)-parseFloat(this.segundovalor)).toString();
    this.operacao='Subtração';

     const alert = await this.alertController.create({
        header: 'Resultado: ',
        message: `${this.primeirovalor} - ${this.segundovalor} = ${this.resultado}`,
        buttons: ['OK'],
      });

        await alert.present();
      }

   async multiplicar(){
     this.resultado = (parseFloat(this.primeirovalor)*parseFloat(this.segundovalor)).toString();
     this.operacao='Multiplicação';

       const alert = await this.alertController.create({
         header: 'Resultado: ',
         message: `${this.primeirovalor} X ${this.segundovalor} = ${this.resultado}`,
         buttons: ['OK'],
        });

          await alert.present();
        }

    async dividir(){
       this.resultado = (parseFloat(this.primeirovalor)/parseFloat(this.segundovalor)).toString();
       this.operacao='Divisão';

        const alert = await this.alertController.create({
           header: 'Resultado: ',
           message: `${this.primeirovalor} % ${this.segundovalor} = ${this.resultado}`,
           buttons: ['OK'],
          });

            await alert.present();
          }

          async maior() {
            if (this.primeirovalor < this.segundovalor){
              const alert = await this.alertController.create({
                header: 'Resultado:',
                subHeader: 'O maior valor é:',
                message: `${this.segundovalor}`,
                buttons: ['OK'],
              });
              this.resultado = this.segundovalor;
              this.operacao='Maior';
              await alert.present();
            }else {

          const alert = await this.alertController.create({
            header: 'Resultado:',
            subHeader: 'O maior valor é:',
            message: `${this.primeirovalor}`,
            buttons: ['OK'],
          });
          this.resultado = this.primeirovalor;
            this.operacao='Maior';
            await alert.present();
        }
        }

        async menor() {
          if (this.primeirovalor < this.segundovalor){
            const alert = await this.alertController.create({
              header: 'Resultado:',
              subHeader: 'O menor valor é:',
              message: `${this.primeirovalor}`,
              buttons: ['OK'],
            });
            this.resultado = this.primeirovalor;
            this.operacao='Menor';
            await alert.present();
          }else {

        const alert = await this.alertController.create({
          header: 'Resultado:',
          subHeader: 'O menor valor é:',
          message: `${this.segundovalor}`,
          buttons: ['OK'],
        });
          this.resultado = this.segundovalor;
          this.operacao='Menor';
           await alert.present();
        }
}

    limpar() {
      this.primeirovalor='';
      this.segundovalor='';
      this.resultado='';
      this.operacao='';
    }
 }


