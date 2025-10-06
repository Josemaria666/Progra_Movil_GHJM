import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

export default function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcular = (operacion) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResultado('Ingresa dos números válidos');
      return;
    }

    let res = 0;
    switch (operacion) {
      case '+':
        res = a + b;
        break;
      case '-':
        res = a - b;
        break;
      case '*':
        res = a * b;
        break;
      case '/':
        res = b !== 0 ? a / b : 'No se puede dividir entre 0';
        break;
      default:
        res = 0;
    }
    setResultado(res);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>CALCULADORA</Text>

      <View style={styles.inputsContainer}>
        <TextInput
          style={styles.input}
          placeholder="Número 1"
          keyboardType="numeric"
          value={num1}
          onChangeText={setNum1}
          placeholderTextColor="#aaa"
        />

        <TextInput
          style={styles.input}
          placeholder="Número 2"
          keyboardType="numeric"
          value={num2}
          onChangeText={setNum2}
          placeholderTextColor="#aaa"
        />
      </View>

      <View style={styles.botonesContainer}>
        <TouchableOpacity style={[styles.boton, styles.botonSuma]} onPress={() => calcular('+')}>
          <Text style={styles.textoBoton}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.boton, styles.botonResta]} onPress={() => calcular('-')}>
          <Text style={styles.textoBoton}>−</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.boton, styles.botonMulti]} onPress={() => calcular('*')}>
          <Text style={styles.textoBoton}>×</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.boton, styles.botonDiv]} onPress={() => calcular('/')}>
          <Text style={styles.textoBoton}>÷</Text>
        </TouchableOpacity>
      </View>

      {resultado !== null && (
        <View style={styles.resultadoContainer}>
          <Text style={styles.resultadoTitulo}>Resultado</Text>
          <Text style={styles.resultadoTexto}>{resultado}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },
  titulo: {
    fontSize: 32,
    fontWeight: '900',
    color: '#facc15',
    marginBottom: 40,
    letterSpacing: 2,
  },
  inputsContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 25,
  },
  input: {
    backgroundColor: '#1e293b',
    color: '#fff',
    borderWidth: 1,
    borderColor: '#334155',
    borderRadius: 10,
    width: '80%',
    padding: 12,
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 12,
  },
  botonesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '85%',
    marginTop: 10,
    gap: 12,
  },
  boton: {
    width: '40%',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  botonSuma: {
    backgroundColor: '#22c55e',
  },
  botonResta: {
    backgroundColor: '#ef4444',
  },
  botonMulti: {
    backgroundColor: '#3b82f6',
  },
  botonDiv: {
    backgroundColor: '#a855f7',
  },
  textoBoton: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  resultadoContainer: {
    marginTop: 40,
    alignItems: 'center',
    backgroundColor: '#1e293b',
    padding: 20,
    borderRadius: 12,
    width: '80%',
  },
  resultadoTitulo: {
    fontSize: 20,
    color: '#facc15',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  resultadoTexto: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
  },
});



