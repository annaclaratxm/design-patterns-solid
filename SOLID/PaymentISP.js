class PagamentoViaPix {
    pagarComPix() {
      console.log("Pagamento realizado via PIX");
    }
  }
  
  class PagamentoViaCartao {
    pagarComCartao() {
      console.log("Pagamento realizado com cartão de crédito");
    }
  }
  
  class PagamentoViaBoleto {
    pagarComBoleto() {
      console.log("Boleto emitido e aguardando pagamento");
    }
  }
  
  const pagarPix = new PagamentoViaPix();
  pagarPix.pagarComPix();
  
  const pagarCartao = new PagamentoViaCartao();
  pagarCartao.pagarComCartao();
  
  const pagarBoleto = new PagamentoViaBoleto();
  pagarBoleto.pagarComBoleto();
  