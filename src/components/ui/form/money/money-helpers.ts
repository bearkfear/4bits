/**
 * Formata um número como uma string no formato brasileiro (dinheiro).
 * @param value O número a ser formatado.
 * @returns A representação formatada do número, ou uma string vazia se o valor for inválido.
 */
export function humanFormat(value?: number): string {
	if (!value || Number.isNaN(value)) {
		return "";
	}
	return Number(value).toLocaleString("pt-BR", {
		maximumFractionDigits: 2,
		minimumFractionDigits: 2,
	});
}

/**
 * Verifica se uma string representa um número inteiro.
 * @param value A string a ser verificada.
 * @returns `true` se a string representar um número inteiro, caso contrário, `false`.
 */
function isInteger(value: string): boolean {
	let result = false;
	if (Number.isInteger(Number.parseInt(value, 10))) {
		result = true;
	}
	return result;
}

/**
 * Remove caracteres não numéricos e zeros à esquerda de uma string numérica.
 * @param value A string numérica a ser limpa.
 * @returns A versão limpa da string numérica.
 */
function cleanNumber(value: string): string {
	let result = "";
	if (value) {
		let flag = false;
		const arrayValue = value.toString().split("");
		for (let i = 0; i < arrayValue.length; i++) {
			if (isInteger(arrayValue[i])) {
				if (!flag) {
					// Retirar zeros à esquerda
					if (arrayValue[i] !== "0") {
						result += arrayValue[i];
						flag = true;
					}
				} else {
					result += arrayValue[i];
				}
			}
		}
	}
	return result;
}

/**
 * Converte uma string no formato brasileiro (dinheiro) em um número de ponto flutuante.
 * @param number A string numérica a ser convertida.
 * @returns O número de ponto flutuante convertido.
 */
export function machineFormat(number: string): number {
	let newNumber = number;
	if (newNumber) {
		// Verificar se o número é negativo
		const isNegative = newNumber.startsWith("-");

		// Remover o sinal negativo temporariamente para formatar o número
		if (isNegative) {
			newNumber = newNumber.substr(1);
		}

		newNumber = cleanNumber(newNumber);
		newNumber = newNumber.padStart(2 + 1, "0");
		newNumber = `${newNumber.substring(0, newNumber.length - 2)}.${newNumber.substring(newNumber.length - 2, newNumber.length)}`;

		if (Number.isNaN(Number(newNumber))) {
			newNumber = "0";
		}

		// Adicionar o sinal negativo de volta ao resultado final
		if (isNegative) {
			newNumber = `-${newNumber}`;
		}
	} else {
		newNumber = "0";
	}

	return Number.parseFloat(newNumber);
}
