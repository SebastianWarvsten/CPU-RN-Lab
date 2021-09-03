import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

export function Currency() {
  const [currency, setCurrency] = useState("EUR");
  const [rates, setRates] = useState();
  const [amount, setAmount] = useState(1);
  const [pic, setPic] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/1920px-Flag_of_Europe.svg.png"
  );

  useEffect(() => {
    fetch("https://api.frankfurter.app/latest")
      .then((response) => response.json())
      .then((data) => {
        setRates(data.rates);
        console.log(data.rates);
      });
  }, []);

  const changeCurrency = (newCurrency) => {
    setCurrency(newCurrency);
    fetch("https://api.frankfurter.app/latest?from=" + newCurrency)
      .then((response) => response.json())
      .then((data) => {
        setRates(data.rates);
        console.log(data.rates);
      });
  };

  const changeFlag = (newFlag) => {
    if (newFlag === "eur") {
      setPic(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/1920px-Flag_of_Europe.svg.png"
      );
      return;
    }
    setPic("https://restcountries.eu/data/" + newFlag + ".svg");
  };

  function onChangeAmount(e) {
    if (!Number(e.target.value)) {
      return;
    }
    setAmount(e.target.value);
  }

  return (
    <View>
      <Text style={styles.header}>
        Växlingskurs för {amount} {currency}{" "}
        <Image source={{ uri: pic }} style={{ width: 50, height: 40 }} />
      </Text>
      {currency ? (
        <Text>The currenct currancy is: {currency}</Text>
      ) : (
        <Text>There is no currancy chosen</Text>
      )}
      {rates ? (
        <Text>USD: {rates.USD * amount}</Text>
      ) : (
        <Text>No rates where found</Text>
      )}
      {rates ? (
        <Text>AUD: {rates.AUD * amount}</Text>
      ) : (
        <Text>No rates where found</Text>
      )}
      {rates ? (
        <Text>CAD: {rates.CAD * amount}</Text>
      ) : (
        <Text>No rates where found</Text>
      )}
      {rates ? (
        <Text>NOK: {rates.NOK * amount}</Text>
      ) : (
        <Text>No rates where found</Text>
      )}
      {rates ? (
        <Text>EUR: {rates.EUR * amount}</Text>
      ) : (
        <Text>No rates where found</Text>
      )}
      {rates ? (
        <Text>SEK: {rates.SEK * amount}</Text>
      ) : (
        <Text>No rates where found</Text>
      )}
      {/* 2. Lägg till en knapp */}
      <Button
        title="SEK"
        onPress={() => {
          changeCurrency("SEK");
          changeFlag("swe");
        }}
      >
        SEK
      </Button>
      <Button
        title="EUR"
        onPress={() => {
          changeCurrency("EUR");
          changeFlag("eur");
        }}
      >
        EUR
      </Button>
      <Button
        title="USD"
        onPress={() => {
          changeCurrency("USD");
          changeFlag("usa");
        }}
      >
        USD
      </Button>
      {/* 3. Lägg till fält att fylla i en summa efter valda valutor */}
      <br />
      <input
        type="textfield"
        pattern="[0-9]"
        value={amount}
        placeholder="Convert amount: "
        onChange={onChangeAmount}
      ></input>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 30,
    fontStyle: "bold",
  },
});
