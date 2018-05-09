define([
  'lateralus',
  './view',
  'text!./template.mustache',
  '../animation-path/main',
  '../crosshair-container/main',
  '../actor-container/main',
  '../timeline-scrubber/main',
], function(
  Lateralus,
  View,
  template,
  AnimationPathComponent,
  CrosshairContainerComponent,
  ActorContainerComponent,
  TimelineScrubberComponent
) {
  'use strict';

  var Base = Lateralus.Component;

  var PreviewComponent = Base.extend({
    name: 'stylie-preview',
    View: View,
    template: template,

    initialize: function() {
      this.addComponent(AnimationPathComponent, {
        el: this.view.$animationPath[0],
      });

      this.addComponent(CrosshairContainerComponent, {
        el: this.view.$crosshairContainer[0],
      });

      this.actorContainerComponent = this.addComponent(
        ActorContainerComponent,
        {
          el: this.view.$actorContainer[0],
        }
      );

      this.addComponent(TimelineScrubberComponent, {
        el: this.view.$timelineScrubber[0],
      });
    },
  });

  return PreviewComponent;
});
