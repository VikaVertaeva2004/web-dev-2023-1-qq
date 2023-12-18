function pluralizeRecords(n) {
    let word = "записей";
    if (n % 10 == 1 && n % 100 != 11) {
      word = "запись";
    } else if ((n % 10 >= 2 && n % 10 <= 4) && (n % 100 < 10 || n % 100 >= 20)) {
      word = "записи";
    }
    return "В результате выполнения запроса было найдено ${n} ${word}";
  }