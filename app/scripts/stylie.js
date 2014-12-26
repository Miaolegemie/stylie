define([

  'lateralus'

  ,'stylie.component.shifty'
  ,'stylie.component.rekapi'
  ,'stylie.component.container'

], function (

  Lateralus

  ,ShiftyComponent
  ,RekapiComponent
  ,ContainerComponent

) {
  'use strict';

  /**
   * @param {Element} el
   * @extends {Lateralus}
   * @constuctor
   */
  var Stylie = Lateralus.beget(function () {
    Lateralus.apply(this, arguments);

    this.cssOrientation = 'first-keyframe';

    this.shiftyComponent = this.addComponent(ShiftyComponent);
    this.rekapiComponent = this.addComponent(RekapiComponent);
    this.containerComponent = this.addComponent(ContainerComponent);

    this.shiftyComponent.addNewCurve();
    this.rekapiComponent.addNewKeyframe({
      state: { x: 200, y: 200 }
    });

    this.on(
      'userSelectedOrientation', this.onUserSelectedOrientation.bind(this));
  });

  /**
   * @param {string} orientation "first-keyframe" or "top-left".
   */
  Stylie.prototype.onUserSelectedOrientation = function (orientation) {
    this.cssOrientation = orientation;
  };

  /**
   * @return {{
   *   name: string,
   *   fps: number,
   *   vendors: Array.<string>,
   *   isCentered: boolean,
   *   iterations: boolean|undefined
   * }}
   */
  Stylie.prototype.getCssConfigObject = function () {
    return this.containerComponent.controlPanelComponent.getCssConfigObject();
  };

  return Stylie;
});