function nbYear(p0, percent, aug, p) {
    
    for (let years = 0; p0 < p; years++) {
      p0 = Math.floor(p0 + p0 * percent / 100 + aug);
    }
    return years
  }