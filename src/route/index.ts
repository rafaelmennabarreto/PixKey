import Home from "../screens/home";
import Register from "../screens/register";

class RouteItem {
  RouteName: string;
  Component: any;
  Title?: string;

  constructor(routeName: string, component: any, title: string) {
    this.RouteName = routeName;
    this.Component = component;
    this.Title = title;
  }
}

export const stackRoutes = [
  new RouteItem("Register", Register, "Registrar Chave"),
  new RouteItem("Home", Home, "Chaves Cadastradas"),
];
