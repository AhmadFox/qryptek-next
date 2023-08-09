import * as SvgIconsComponent from "../components/icons";

/**
 * Icons Component map.
 *
 * @param {string} name Icon Name.
 * @returns {*}
 */
export const getIconComponentByName = (name) => {
  const ComponentsMap = {
    step_1: SvgIconsComponent.Analyiz,
    step_2: SvgIconsComponent.Design,
    step_3: SvgIconsComponent.Coding,
    step_4: SvgIconsComponent.Testing,
    step_5: SvgIconsComponent.Impliment,
  };

  if (name in ComponentsMap) {
    const IconComponent = ComponentsMap[name];
    return <IconComponent className="gradient" />;
  } else {
    return null;
  }
};
