describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/') //зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверяю цвет кнопки восс. пароль

         cy.get('#mail').type('german@dolnikov.ru'); //ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); //ввели верный пароль 
         cy.get('#loginButton').click(); //нажал войти

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверяю, что после авторизации вижу текст 
         cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден для пользователя
     })

     it('Верный логин и Неверный пароль', function () {
        cy.visit('https://login.qa.studio/') //зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверяю цвет кнопки восс. пароль

        cy.get('#mail').type('german@dolnikov.ru'); //ввели верный логин
        cy.get('#pass').type('iLoveqastudio7'); //ввели неверный пароль 
        cy.get('#loginButton').click(); //нажал войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверяю, что после авторизации вижу текст 
        cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден для пользователя
    })

    it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/') //зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверяю цвет кнопки восс. пароль

        cy.get('#mail').type('ivan@dolnikov.ru'); //ввели неверный логин
        cy.get('#pass').type('iLoveqastudio1'); //ввели верный пароль 
        cy.get('#loginButton').click(); //нажал войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверяю, что после авторизации вижу текст 
        cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден для пользователя
    })


    it('Логин без @', function () {
        cy.visit('https://login.qa.studio/') //зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверяю цвет кнопки восс. пароль

        cy.get('#mail').type('germandolnikov.ru'); //ввели логин без @
        cy.get('#pass').type('iLoveqastudio1'); //ввели верный пароль 
        cy.get('#loginButton').click(); //нажал войти

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //проверяю, что после авторизации вижу текст 
        cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден для пользователя
    })

    it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/') //зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверяю цвет кнопки восс. пароль

        cy.get('#forgotEmailButton').click();; //нажимаю восстановить пароль

        cy.get('#forgotForm').type('german@dolnikov.ru'); //ввел почту для восстановления
        cy.get('#restoreEmailButton').click();; //нажал отправить код

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //проверяю на совпадение текст 
        cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден для пользователя
    })

    it('Приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/') //зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверяю цвет кнопки восс. пароль

        cy.get('#mail').type('GerMan@Dolnikov.ru'); //ввели логин 
        cy.get('#pass').type('iLoveqastudio1'); //ввели верный пароль 
        cy.get('#loginButton').click(); //нажал войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверяю, что после авторизации вижу текст 
        cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден для пользователя
    })


 })
 
 
 
 