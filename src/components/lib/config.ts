import { LayoutOutlined, FieldStringOutlined, FontSizeOutlined } from '@ant-design/icons';
import Title from "src/components/lib/title/Title";
import TitleTemplate from "src/components/lib/title/TitleTemplate";
import Profile from "src/components/lib/profile/Profile";
import ProfileTemplate from "src/components/lib/profile/ProfileTemplate";
import TextComponent from "src/components/lib/text/TextComponent";
import TextTemplate from "src/components/lib/text/TextTemplate";

/*
 * component = Компонент представления, который рендерится в дашборде
 * template = Компонент с формой, который рендерится в модалке для наполнения компонента представления
 * */

export const lib = {
  "1": {
    id: "1",
    name: "Заголовок",
    component: Title,
    template: TitleTemplate,
    icon: FieldStringOutlined,
  },
  "2": {
    id: "2",
    name: "Профиль",
    component: Profile,
    template: ProfileTemplate,
    icon: LayoutOutlined,
  },
  "3": {
    id: "3",
    name: "Текст",
    component: TextComponent,
    template: TextTemplate,
    icon: FontSizeOutlined,
  },
};
