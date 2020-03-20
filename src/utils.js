const dateFormat = (fullDate, show = true) => {
  const date = new Date(fullDate);
  const options = {month: `long`};

  if (show) {
    return `${date.toLocaleDateString(`en-EN`, options)} ${date.getFullYear()}`;
  }
  return `${date.getFullYear()}-${date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth()}-
          ${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}`;
};

const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const offerModel = (offers) => {
  return offers.map((offer) => {
    const {
      bedrooms,
      city,
      description: propertyText,
      goods: insideList,
      host,
      id,
      images: propertyImage,
      is_favorite: isFavorite,
      is_premium: isPremium,
      location,
      max_adults: adults,
      preview_image: previewImage,
      price,
      rating,
      title,
      type
    } = offer;
    return {
      id,
      city: city.name,
      cityCoords: [city.location.latitude, city.location.longitude],
      cityZoom: city.location.zoom,
      propertyImage,
      title,
      mark: isPremium ? `Premium` : ``,
      previewImage,
      price,
      bookmark: isFavorite,
      propertyText,
      rating: {
        star: (Math.floor(rating) / 5) * 100,
        value: rating,
      },
      features: {
        entire: type,
        bedrooms,
        adults,
      },
      insideList,
      host: {
        avatarUrl: host.avatar_url,
        id: host.id,
        name: host.name,
        isPro: host.is_pro,
      },
      coords: [location.latitude, location.longitude],
      coordsZoom: location.zoom,
    };
  });
};

const reviewModel = (reviews) => {
  return reviews.map((review) => {
    const {
      comment: description,
      date,
      id,
      rating,
    } = review;
    const {
      id: userId,
      avatar_url: userAvatar,
      name: userName,
      is_pro: proUser,
    } = review.user;
    return {
      description,
      date,
      id,
      rating,
      userId,
      userAvatar,
      userName,
      proUser
    };
  });
};

const uniqueFilter = (data, filterValue, limiter = 0) => {
  const dataSet = new Set();

  data.slice().map((item) => {
    dataSet.add(item[filterValue]);
  });

  return limiter > 0 ? Array.from(dataSet).slice(0, limiter) : Array.from(dataSet);
};

export {dateFormat, extend, offerModel, reviewModel, uniqueFilter};
