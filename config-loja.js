(function (escopoGlobal) {
    "use strict";

    const config = Object.freeze({
        slug: "cappri",
        nome: "Cappri",
        razaoSocial: "Uze Cappri Ltda",
        cnpj: "66.278.427/0001-64",
        email: "uzecappri@gmail.com",
        whatsapp: {
            exibicao: "(77) 99208-1605",
            internacional: "5577992081605"
        },
        logo: "WhatsApp Image 2026-07-12 at 18.02.27.jpeg",
        apiUrl: "https://cappri.onrender.com",
        roletaUrl: "https://tnlabs-dev.github.io/Capprimodafeminina/",
        instagram: "instagram.com/uze.cappri",
        mensagemCompartilhamento: "Acabei de descobrir a Roleta de Prêmios da Cappri! ✨ Comprando acima de R$200 você garante um giro e pode ganhar desde cupons até R$500 em roupas. Dá uma olhada no Instagram e vem conferir: instagram.com/uze.cappri 💫👗",
        chavesSessao: {
            administracao: "cappri_admin_session",
            equipe: "cappri_senha_equipe"
        },
        voucherPrefix: "CPR",
        cores: {
            principal: "#7A2A46",
            principalEscura: "#54172F",
            destaque: "#C89B9A",
            destaqueForte: "#B58A32",
            destaqueSuave: "#F4E5E7",
            fundo: "#FBF8F4",
            papel: "#FFFDFC",
            texto: "#30262A",
            textoSuave: "#776B70",
            borda: "#EADFE1"
        }
    });

    escopoGlobal.LojaConfig = config;

    const documento = escopoGlobal.document;
    if (documento) {
        const raiz = documento.documentElement;
        const cores = config.cores;
        const variaveisCss = {
            "--cor-fundo": cores.fundo,
            "--cor-bordeaux": cores.principal,
            "--cor-azul-marinho": cores.principal,
            "--cor-rose-gold": cores.destaque,
            "--cor-vermelho": cores.destaque,
            "--cor-vermelho-claro": cores.destaqueSuave,
            "--cor-ouro": cores.destaqueForte,
            "--cor-borda": cores.borda,
            "--cor-texto": cores.texto,
            "--vinho": cores.principal,
            "--vinho-escuro": cores.principalEscura,
            "--rose": cores.destaque,
            "--rose-claro": cores.destaqueSuave,
            "--ouro": cores.destaqueForte,
            "--creme": cores.fundo,
            "--texto": cores.texto,
            "--muted": cores.textoSuave,
            "--borda": cores.borda,
            "--bordeaux": cores.principal,
            "--gold": cores.destaqueForte,
            "--ink": cores.texto,
            "--paper": cores.papel
        };
        Object.entries(variaveisCss).forEach(([nome, valor]) => {
            raiz.style.setProperty(nome, valor);
        });
        raiz.dataset.lojaConfig = config.slug;

        const aplicarIdentidade = () => {
            documento.querySelectorAll("[data-loja-nome]").forEach(elemento => {
                elemento.textContent = config.nome;
            });
            documento.querySelectorAll("[data-loja-razao-social]").forEach(elemento => {
                elemento.textContent = config.razaoSocial;
            });
            documento.querySelectorAll("[data-loja-cnpj]").forEach(elemento => {
                elemento.textContent = config.cnpj;
            });
            documento.querySelectorAll("[data-loja-email]").forEach(elemento => {
                elemento.textContent = config.email;
                if (elemento.tagName === "A") elemento.href = `mailto:${config.email}`;
            });
            documento.querySelectorAll("[data-loja-whatsapp]").forEach(elemento => {
                elemento.textContent = config.whatsapp.exibicao;
                if (elemento.tagName === "A") {
                    elemento.href = `https://wa.me/${config.whatsapp.internacional}`;
                }
            });
            documento.querySelectorAll("[data-loja-logo]").forEach(elemento => {
                elemento.src = config.logo;
                elemento.alt = `Logo ${config.nome}`;
            });
            documento.querySelectorAll("[data-loja-rodape-privacidade]").forEach(elemento => {
                elemento.textContent = `${config.razaoSocial} · CNPJ ${config.cnpj} · Aviso de Privacidade versão 1.0`;
            });
        };

        if (documento.readyState === "loading") {
            documento.addEventListener("DOMContentLoaded", aplicarIdentidade, { once: true });
        } else {
            aplicarIdentidade();
        }
    }

    if (typeof module !== "undefined" && module.exports) {
        module.exports = config;
    }
})(typeof window !== "undefined" ? window : globalThis);
