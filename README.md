Me chamo Vinicius Jovito e esse é meu aprendizado em Angular!!

Link do curso: https://cursos.dankicode.com/campus/curso-angular-completo

O que é Angular?

    É um framework javascript que permite a criação de Single Page Applications reativas, uma SPA se trata de uma aplicação de pagina uníca, ou seja, uma página onde todas as interações ocorrem em uma única pagina, sem os famosos "refresh", tudo por trás de um único HTML. Dessa maneira, a página é baixada através de um servidor de uma única vez, sendo assim, não há a necessidade de ficar realizado requests no servidor, pois a aplicação estará no Local Host, sendo muito mais rápido e melhorando a experiência de usuário.

Angular Básico:

    Carregamento do Projeto: Ao usar o comando "ng serve", o primeiro arquivo a ser construido é o "main.ts", onde há um método "bootstrapModule" que referencia o módulo principal que irá executar. Em seguida, através do referenciamento, leva ao arquivo "app.module.ts". Ou seja, o arquivo "main.ts", chama o "app.module.ts" que chama o "app.component.ts" que tem como selector "app-root"(exemplo dado na aula).

    A importância dos componentes: Cada componente em a liberdade de template e estilos, ou até mesmo regra de negocio, uma tela é formada por varios componentes, seja eles cabeçalho, menu ou sidebar, vai a critério de quem criar.

    Criando um novo componente: Na pasta  "app", criei um subpasta nomeada de "school", seguindo o exemplo da video aula, dentro dela criei dois arquivos para o componente school, sendo eles: "school.component.ts" e "school.component.html" , onde em "school.component.ts" criei a classe "SchoolComponent" que tem como seletor "app-school" e como templateUrl o diretorio do "./school.component.html". Em seguida, adicionei esse novo componente em "app.module.ts", que separa o sistemas em pedaços diferentes, dentro de "declaration" declaro a classe SchoolComponent e importo com o diretorio, da seguinte forma: "import { SchoolComponent } from './school/school.component';"

    Criando componentes via CLI: Com o terminal aberto, criei um novo componente chamado "schools", usando o comando "ng generate component schools" ou "ng g c schools", com esse comando ele faz o mesmo processo que o paragrafo anterior de maneira automática.

    Trabalhando com templates: Dentro de "school.component.ts" utilizei o "TemplateUrl" que faz o uso de outro arquivo para mostrar no navegador as informações, esse arquivo é o "school.component.html". Porém, há outra forma de usar um template, que é através do uso de "Template" ao invés de "TemplateUrl", nesse método, o código que estaria dentro do arquivo externo usado pelo "TemplateUrl" é colocado dentro do método, e não o diretório do arquivo. Para ser mais expecifico, se o código for muito grande, usar o "TemplateUrl" é uma ótima solução, caso contrário, se o código for pequeno, o uso de "Template" é uma boa saida.

    Trabalhando com estilo: De maneira semelhante aos templates, com os estilos funciona da mesma forma, porém o arquivo usado no "styleUrls" é o com final ".css" e não com final ".html", como no exemplo do próprio "app.component.ts" que foi usado o seguinte estilo: "styleUrls: ['./app.component.css']". Para customizar, basta criar dentro de app.component.css os estilos que quiser.

    Databinding: É a comunicação entre o nosso typescript(lógica de negócio) com o HTML(Template), usando as variáveis do typescript e passando essas informações contidas em variaveis para o HTML(por dados de saida), há algumas formas de fazer isso, elas são: string interpolation, property binding, event binding e two way databinding.

    String Interpolation: Criando variaveis dentro do arquivo typescript do app, é possivel passar para o HTML através do uso de chaves duplas "{{exemplo}}", pode ser usado também, classes, strings, nome de funções(que tenham algum return).

    Property Binding: Utilizando funções no typescript, é possivel alterar as caracteristicas dentro do HTML, nessa aula vimos que ao criar a função "setTimeOut" conseguimos alterar o valor da variavel "aceitaNovaEscola", assim mudando uma propriedado do HTML que fazia que o botão criado no template ficasse desabilitado, assim ao final de tudo, a função fez com que o botão ficasse 3 segundos desabilitado logo então liberava ele.

    