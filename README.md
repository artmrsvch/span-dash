## Информация о работе со скриптами проекта

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Библиотеки
В качестве UI-библиотеки используется [Ant Design](https://ant.design/components/overview/).

Стилизация компонентов происходит при помощи [Styled-components](https://styled-components.com/docs).

## Архитектура
В папке [**components**](src/components) находится папка с компонентами основными компонентами приложения.
### [components](src/components/components)
* ***ComponentsTemplate***: Представляет собой компонент-обертку, которая создает единую форму для всех 
шаблонов-компонентов (компоненты-формы для создания/редактирования пропсов других компонентов). В качестве аргумента принимает 
  - id  - айди компонента из конфига.
  - uid - уникальный идентификатор, присвоенный в массиве всех выбранных компонентов. Необходим для идентифицирования компонентов, т.к. имеется возможность добавлять одинаковые компоненты.
  - visible - т.к это [Drawer-компонент](https://ant.design/components/drawer/), мы управляем его состоянием отображения.
  - onSave - колбек, который срабатывает при сохранении, редактировании, дублировании или удалении компонента. 
    События различаются по след. принципу: если передан пропс `action`, то это удаление либо дублирование. 
    При отсутствии `action`, опираемся на пропс `uid`. Его наличие говорит о том, что происходит редактирование компонента.
  - onClose - колбек для закрытия модалки без сохранения изменений.
    
* ***ConfirmDrawer***: Drawer-компонент для подтверждения дальнейшего действия.
* ***ControlPanel***: Компонент кнопок управления. Содержит три кнопки: кнопка смены темы (функционал не готов, кнопка disabled), 
  кнопка добавления нового компонента и кнопка активации режима смены порядка компонентов.
  
* ***DragDrop***: Содержит реализацию двух компонентов DragNDrop библиотеки [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd):
драг-контейнер и компонент драг-айтем.

* ***DrawerMenu***: Drawer-меню с рабочими компонентами. Список рендерится из конфига.
* ***Editor***: [Wysywig](https://www.npmjs.com/package/react-draft-wysiwyg) для редактирования текста. Сопровождается двумя библиотеками для парсинга
в html-строку и обратно в формат визивига.
  
* ***Dashboard***: Компонент для отображения выбранных пользователем компонентов.
* ***Header***: Шапка, содержит кнопку **сохранения**, которая временно сохраняет в localStorage.

### [lib](src/components/lib)
Содержит непосредственно сами компоненты, которые выбирает пользователь. Каждая папка содержит
два компонента:
* Компонент для отображения представления.
* Компонент для редактирования/создания пропсов.

Управления состоянием компонентов создания/редактирования, происходит посредством [Antd-Form](https://ant.design/components/form/),
потому мы используем внутри шаблонов Form.Item. 
Также в каждом таком компоненте у нас есть доступ к инстансу формы через контекст `const { form } = useContext(FormContext);`

### Добавление компонентов для пользователя
Производится в файле [config.ts](src/components/lib/config.ts). Файл экспортирует объект `lib`, 
каждый его ключ является идентификатором для быстрого доступа внутри приложения. 
Потому при работе, нам достаточно всего-лишь знать `id` компонента для доступа к данным о нем по O(1).
Каждый компонент имеет следующую структуру: 

* id: дублирование динамического поля id.
* name: заголовок для отображения названия компонента.
* component: компонент-представления.
* template: компонент-форма для создания пропсов.
* icon: SVG иконка для отображения в меню.

### [ui](src/components/ui)
Папка содержит компоненты интерфейса приложения (Button, Link, FormItem, etc...). 

## Как работает конструктор
Основная реализация по управлению состоянием приложения заключена в хуке [useConstructor](src/components/useConstructor.ts). 
Он представляет собой `useReducer`, который в зависимости от action, выполняет состояния приложения.
Детали реализации можно посмотреть непосредственно в хуке, некоторые моменты описаны в комментах.

## P.S.
> Если остались вопросы, пишите в телеграмм **@artmrsvch**
