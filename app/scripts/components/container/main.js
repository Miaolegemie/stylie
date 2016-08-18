define([

  'lateralus'

  ,'./view'
  ,'text!./template.mustache'

  ,'stylie.component.header'
  ,'stylie.component.help'
  ,'stylie.component.too-small-message'
  ,'stylie.component.control-panel'
  ,'stylie.component.preview'

], function (

  Lateralus

  ,View
  ,template

  ,HeaderComponent
  ,HelpComponent
  ,TooSmallMessageComponent
  ,ControlPanelComponent
  ,PreviewComponent

) {
  'use strict';

  var Base = Lateralus.Component;

  var ContainerComponent = Base.extend({
    name: 'container'
    ,View: View
    ,template: template

    ,initialize: function () {
      this.headerComponent = this.addComponent(HeaderComponent, {
        el: this.view.$header[0]
      });

      this.helpComponent = this.addComponent(HelpComponent, {
        el: this.view.$help[0]
      });

      this.tooSmallMessageComponent = this.addComponent(
          TooSmallMessageComponent, {
        el: this.view.$tooSmallMessage[0]
      });

      this.controlPanelComponent = this.addComponent(ControlPanelComponent, {
        el: this.view.$controlPanel[0]
      });

      this.previewComponent = this.addComponent(PreviewComponent, {
        el: this.view.$preview[0]
      });
    }
  });

  return ContainerComponent;
});
