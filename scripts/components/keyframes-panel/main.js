define(['lateralus', './view', 'text!./template.mustache'], function(
  Lateralus,
  View,
  template
) {
  'use strict';

  var Base = Lateralus.Component;

  var KeyframesPanelComponent = Base.extend({
    name: 'stylie-keyframes-panel',
    View: View,
    template: template,
  });

  return KeyframesPanelComponent;
});
