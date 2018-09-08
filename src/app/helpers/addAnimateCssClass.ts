  /**
   * Remove animation(s) after 'animationend' event from AnimateCss Library to properly display it
   * @param elementId id of the element
   * @param classes string[] of classes
   * Example , (sectionId, ['animated', 'fadeIn'])
   */
  export function addAnimateCssClass(elementId: string, classes: string[]) {
    const aboutContentElement = document.getElementById(elementId);

    classes.forEach(
      (elementClass: string) => {
      aboutContentElement.classList.add(elementClass);
    });

  }