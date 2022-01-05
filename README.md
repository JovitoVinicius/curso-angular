Me chamo Vinicius Jovito e esse é meu aprendizado em Angular!!

Link do curso: https://cursos.dankicode.com/campus/curso-angular-completo

Angular Básico:

    Carregamento do Projeto: Ao usar o comando "ng serve", o primeiro arquivo a ser construido é o "main.ts", onde há um método "bootstrapModule" que referencia o módulo principal que irá executar. Em seguida, através do referenciamento, leva ao arquivo "app.module.ts". Ou seja, o arquivo "main.ts", chama o "app.module.ts" que chama o "app.component.ts" que tem como selector "app-root"(exemplo dado na aula).

    A importância dos componentes: Cada componente em a liberdade de template e estilos, ou até mesmo regra de negocio, uma tela é formada por varios componentes, seja eles cabeçalho, menu ou sidebar, vai a critério de quem criar.

    Criando um novo componente: Na pasta  "app", criei um subpasta nomeada de "school", seguindo o exemplo da video aula, dentro dela criei dois arquivos para o componente school, sendo eles: "school.component.ts" e "school.component.html" , onde em "school.component.ts" criei a classe "SchoolComponent" que tem como seletor "app-school" e como templateUrl o diretorio do "./school.component.html". Em seguida, adicionei esse novo componente em "app.module.ts", que separa o sistemas em pedaços diferentes, dentro de "declaration" declaro a classe SchoolComponent e importo com o diretorio, da seguinte forma: "import { SchoolComponent } from './school/school.component';"

    Criando componentes via CLI: Com o terminal aberto, criei um novo componente chamado "schools", usando o comando "ng generate component schools" ou "ng g c schools", com esse comando ele faz o mesmo processo que o paragrafo anterior de maneira automática.

