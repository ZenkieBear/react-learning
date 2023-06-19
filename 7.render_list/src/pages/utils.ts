export function getImageUrl(person: {imageId: string}): string {
    return (
      'https://i.imgur.com/' +
      person.imageId +
      's.jpg'
    );
  }
  