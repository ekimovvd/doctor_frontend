import * as _ from "lodash";
import { resolve } from "path";

const HomeModule = function () {
  const names = [
    {
      name: "index",
      path: "/",
    },
    {
      name: "index___ru",
      path: "/",
    },
    {
      name: "index___en",
      path: "/en/",
    },
  ];

  this.extendRoutes((routes: Object[]) => {
    _.forEach(names, (item) => {
      routes.unshift({
        name: item.name,
        path: item.path,
        meta: { requiresAuth: false },
        component: resolve(__dirname, "component/component.vue"),
      });
    });
  });
};

export default HomeModule;
