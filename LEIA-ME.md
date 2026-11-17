# MS Vida — site completo

Entrega local em 13/11/2026. **Nada foi publicado e nenhum DNS, painel, domínio ou serviço de hospedagem foi alterado.**

## Como abrir

Abra [index.html](index.html) no navegador. Os links relativos, imagens e fontes funcionam na pasta local, sem instalação. Para uma prévia HTTP, abra um terminal nesta pasta e execute:

```powershell
python -m http.server 8787 --bind 127.0.0.1
```

Depois acesse `http://127.0.0.1:8787/`. Encerre com Ctrl+C. Não há etapa de compilação ou dependência de servidor para o site publicado.

## O que foi entregue

- 38 páginas do sitemap solicitado, incluindo a landing aprovada e os 20 artigos completos.
- Blog com as quatro categorias originais: Dermatologia, Ginecologia, Implante Hormonal e Tricologia. Um artigo pode pertencer a mais de uma categoria. Filtro por botão e por `?category=Tricologia`, com contagem e estado acessível. Sem JavaScript, os 20 artigos permanecem legíveis.
- Três páginas de apresentação de e-books, três leitores dos materiais originais e newsletter. As 54 páginas públicas dos e-books foram preservadas como imagens: pele (26), cabelos (16) e primeira consulta (12).
- Imagens públicas recuperadas em `assets/original/`, sem requisições ao CDN do Squarespace. Os retratos aprovados da landing foram preservados. Montserrat e DM Sans estão hospedadas localmente em `assets/fonts/`, com licenças OFL.
- `sitemap.xml`, `robots.txt`, página 404, `.nojekyll`, navegação móvel, WhatsApp e links de contato.
- Comentários `TODO` no HTML nos pontos que dependem de confirmação ou integração. Não existe formulário que finge enviar dados, PDF inventado ou confirmação fictícia de cadastro.

## Conteúdo e rastreabilidade

Fonte: [site público no endereço interno do Squarespace](https://clarinet-blenny-7axl.squarespace.com/) e [sitemap original](https://clarinet-blenny-7axl.squarespace.com/sitemap.xml), recuperados em 13/11/2026. A página inicial deriva de `../msvida-repaginado/index.html`, aprovada anteriormente por Matheus.

Os textos clínicos, procedimentos, biografias e relatos das páginas internas foram extraídos do conteúdo público, com correções pontuais de digitação e remoção de pontos decorativos nos títulos. Nenhum preço, CRM/RQE, credencial profissional, convênio ou depoimento novo foi criado. Navegação, avisos de indisponibilidade e instruções de leitura são textos de interface.

As cópias-fonte e scripts de reconstrução ficam fora da pasta publicável, em `../../work/msvida-current/`, `../../work/build_msvida.py` e `../../work/qa_msvida.py`. O inventário de origem está em `../../work/msvida-pages.json`; a correspondência entre imagens e URLs públicas está em `../../work/msvida-assets.json`.

Os endereços originais continuam disponíveis por pastas com `index.html`; `/tag/`, `/category/`, `/home` e `/home-teste` não foram reconstruídos. Links antigos de agendamento que não estavam no sitemap passaram a apontar para a página de contato. Links de categorias dentro do conteúdo usam o filtro do blog. Os cartões de leitura complementar foram reorganizados.

## Pendências para a clínica confirmar antes da publicação

1. Revisar e aprovar os textos médicos existentes, inclusive informações sobre implantes hormonais, indicações, duração, benefícios e resultados. A migração preserva a fonte; não constitui revisão médica. Há divergência na própria fonte: a página geral cita duração de quatro meses, enquanto outras citam de quatro meses a um ano. Confirmar o texto aplicável em cada caso.
2. Fornecer CRM, UF, RQE e identificação do responsável técnico, quando aplicável. Esses dados não foram preenchidos por suposição. Confirmar formação, especialidades e biografias atuais.
3. Confirmar se permanece o atendimento Omint **categoria Corporate** e os serviços listados na página pública. Não foi ampliada a cobertura descrita.
4. Confirmar telefones, e-mail, endereço e horário. A landing aprovada informa `(11) 3804-1577`; a antiga página de contato informa `(11) 3804-1557`. Ambas as fontes foram preservadas, sem escolher um número por suposição. A outra linha é `(11) 3804-1555`; o WhatsApp usado pelo site original é `(11) 97607-0587`. E-mail original: `camila@msvida.com.br`. Horário original: segunda a sexta, das 9h às 18h.
5. Confirmar autorização de uso de fotografias, marcas e depoimentos já públicos. Os retratos restaurados da landing reconstruíram detalhes a partir das imagens fornecidas anteriormente; obter os arquivos fotográficos originais é preferível para substituição futura.
6. Fornecer política de privacidade e os textos de consentimento e retenção para os cadastros. Nenhuma política jurídica foi inventada.
7. Conectar os formulários a um provedor real, definir destinatário/lista e testar entrega, validação, erro e cancelamento de inscrição. Só então retirar os avisos de indisponibilidade. Os formulários antigos dependem do Squarespace e não funcionariam apenas com HTML estático.
8. Confirmar e fornecer os três PDFs oficiais e decidir se a entrega será pública ou condicionada ao cadastro. Hoje há leitura das imagens publicamente disponíveis, com aviso explícito de que o arquivo para download está pendente. Não foi extraído nenhum cadastro privado.
9. Confirmar a categoria dos três artigos antigos sobre envelhecimento da pele, protetor solar e antioxidantes. A [coleção JSON pública original](https://clarinet-blenny-7axl.squarespace.com/blog?format=json) retorna categoria vazia nesses três casos. Eles permanecem em **Todos**, identificados por “MS Vida”, sem inventar uma atribuição. Os filtros preservam as associações existentes: Dermatologia (5), Ginecologia (8), Implante Hormonal (3) e Tricologia (1); os três sem categoria completam os 20 artigos.

| Página com integração pendente | O que falta |
| --- | --- |
| `/contato` | Conectar captação da newsletter, consentimento e política de privacidade |
| `/e-book-guia-cuidados-com-a-pele-` | Confirmar destino, provedor, consentimento e política de privacidade |
| `/download-ebook-guia-de-pele` | Confirmar PDF oficial; 26 páginas públicas recuperadas como imagens locais |
| `/ebook-cuidados-com-os-cabelos` | Confirmar destino, provedor, consentimento e política de privacidade |
| `/download-ebook-guia-cabelos` | Confirmar PDF oficial; 16 páginas públicas recuperadas como imagens locais |
| `/ebook-implante-hormonal-perguntas-respostas` | Confirmar destino, provedor, consentimento e política de privacidade |
| `/download-ebook-guia-1-consulta-implante` | Confirmar PDF oficial; 12 páginas públicas recuperadas como imagens locais |
| `/lead-cadastro-newsletter` | Confirmar provedor, lista de contatos, consentimento e política de privacidade |

## Revisão visual e funcional

A identidade da landing foi mantida: laranja, branco, Montserrat nos títulos, DM Sans no texto, fotografias retangulares e botões arredondados. As páginas internas usam o mesmo sistema, com colunas que se reorganizam no celular e largura de leitura limitada nos artigos. Títulos sem ponto final decorativo e sem setas decorativas.

Pesquisa proporcional à continuação, sem redesenhar a landing aprovada:

- [Revive Skincare no CSS Design Awards](https://cssdesignawards.com/sites/revive-skincare/43210/), **Special Kudos em 29/03/2023**; [site observado](https://reviveskincare.ca/). Referência para hierarquia entre fotografia, título e ação, e para a passagem da composição em colunas para a vertical no celular.
- [Clinic Beethovenstrasse no CSS Design Awards](https://cssdesignawards.com/sites/clinic-beethovenstrasse/46193/), **Website of the Day em 05/09/2024**; [site observado](https://www.colette-camenisch.com/en). Referência para respiro e hierarquia tipográfica. O vídeo inicial permaneceu preto/em carregamento na captura; não foi tratado como experiência verificada. Não foram copiados layout, fontes ou textos desses projetos.

Capturas do site em **1440 px e 390 px** e relatório de validação ficam em `../msvida-revisao/`, fora da pasta publicável. A validação compara os textos com a fonte, verifica links e imagens locais, navegação de todas as páginas, filtros, menu móvel, ausência de rolagem horizontal e erros de JavaScript. A sessão de prévia integrada estava indisponível; a revisão utilizou o Edge automatizado com os arquivos locais servidos ao navegador pelo interceptador de teste. O servidor HTTP local foi conferido separadamente. Não foram testados envio real de formulários nem download de PDFs, pois continuam pendentes.

## Publicação gratuita — Cloudflare Pages

Este é um roteiro para execução futura pelo titular. Nenhuma etapa abaixo foi executada. A opção escolhida é Cloudflare Pages; não é necessário contratar Hostinger ou recuperar a conta Squarespace para publicar estes arquivos estáticos. O registro e a renovação do domínio continuam sujeitos ao Registro.br.

### 1. Publicar e testar antes de mudar o domínio

1. Resolva as pendências de conteúdo e escolha como ativar os cadastros.
2. Crie ou entre na conta Cloudflare do cliente, com um projeto Pages no plano gratuito.
3. Em **Workers & Pages**, crie um projeto **Pages** com **Direct Upload / Upload assets**. O nome e a ordem dos botões podem variar.
4. Envie **o conteúdo desta pasta**, com `index.html`, `assets/`, `css/`, `js/`, todas as pastas de páginas e os arquivos auxiliares. Não envie a pasta `work/`, os HTMLs do Squarespace, as capturas ou o arquivo ZIP como conteúdo do site. Se a interface aceitar ZIP, use `../msvida-site.zip`, cuja raiz contém diretamente `index.html`.
5. Não selecione framework nem comando de build; o projeto é HTML estático. Se optar por integração com Git em vez de upload, o diretório de saída deve ser a pasta que contém `index.html`.
6. Teste o endereço `NOME-DO-PROJETO.pages.dev`: início, especialidades, contato, quatro filtros, artigos, e-books, menu no celular, imagens, WhatsApp e links de telefone. A ação de WhatsApp abre uma conversa; não envia mensagem automaticamente.
7. O projeto de upload direto e o projeto com integração Git têm fluxos distintos. Escolha o modo antes de começar, conforme a [documentação de Direct Upload](https://developers.cloudflare.com/pages/get-started/direct-upload/).

### 2. Preservar o e-mail Google

Antes de qualquer mudança de DNS, exporte/copie a **zona completa atual** no Registro.br. Guarde nome, tipo, destino, prioridade e TTL de cada registro. O arquivo antigo `../../work/msvida-dns-before.json` é só uma fotografia pública parcial, não um backup completo e não contém todos os TXT.

Preserve todos os **MX e TXT** do Google, inclusive verificação de domínio, SPF, DKIM (por exemplo, `google._domainkey`) e DMARC, além de registros de outros serviços. Não crie um segundo SPF e não substitua valores por exemplos genéricos.

O registro público antigo mostrava estes MX, que precisam ser conferidos com a zona vigente:

| Prioridade | Destino |
| --- | --- |
| 1 | `aspmx.l.google.com` |
| 5 | `alt1.aspmx.l.google.com` |
| 5 | `alt2.aspmx.l.google.com` |
| 10 | `alt3.aspmx.l.google.com` |
| 10 | `alt4.aspmx.l.google.com` |

Os TXT atuais devem ser copiados literalmente da zona do cliente; não foram consultados nem inventados nesta entrega.

### 3. Escolher como apontar o domínio no Registro.br

**Para usar `msvida.com.br` e `www.msvida.com.br` no Cloudflare Pages:**

1. Adicione a zona `msvida.com.br` na conta Cloudflare do cliente.
2. Confira a importação automática e complete manualmente **todos** os MX, TXT e demais registros da cópia da zona. Registros de e-mail não devem ser encaminhados pelo proxy do site.
3. A Cloudflare fornecerá dois servidores DNS. No Registro.br, em **Domínio → DNS → Alterar servidores DNS**, substitua os servidores atuais exatamente pelos servidores fornecidos para essa zona. Não copie nameservers de outro projeto. Se houver DNSSEC ativo, siga a orientação de migração das duas plataformas para evitar uma cadeia de validação inválida; não mantenha um DS antigo apontando para chaves que não existem na nova zona.
4. Depois da mudança dos servidores, a edição dos registros passa a ocorrer na **Cloudflare**; o domínio continua registrado no Registro.br.
5. No projeto Pages, em **Custom domains**, adicione `www.msvida.com.br` e `msvida.com.br`. Siga os registros e validações que o painel fornecer. Substitua somente os registros antigos do **site** para esses mesmos nomes (A/AAAA/CNAME do Squarespace). Não remova MX ou TXT.
6. Configure um redirecionamento permanente do domínio sem `www` para `https://www.msvida.com.br`, preservando caminho e consulta. O domínio canônico dos HTMLs e do sitemap nesta entrega é `https://www.msvida.com.br`.
7. Espere a validação e emissão do certificado HTTPS. Confira páginas com os caminhos antigos, certificado, envio e recebimento de e-mail e autenticação do Google. Só encerre a migração depois desses testes.

**Se quiser manter os servidores DNS do Registro.br:**

1. Cloudflare Pages aceita um domínio externo por **subdomínio**, como `www.msvida.com.br`.
2. Primeiro adicione `www.msvida.com.br` em **Custom domains** no Pages. Depois, na zona DNS do Registro.br, troque apenas o CNAME `www` pelo destino exato `NOME-DO-PROJETO.pages.dev` fornecido pelo projeto. Mantenha os MX e TXT.
3. Isso **não resolve o domínio raiz `msvida.com.br`**. Um CNAME no `www` não faz o domínio sem `www` funcionar, e não se deve colocar um CNAME na raiz que conflite com MX/TXT. Para ter os dois nomes no Pages, use a migração de nameservers descrita acima, ou contrate/configure separadamente um redirecionamento compatível para a raiz. Não deixe os A antigos do Squarespace como se servissem o novo site.

Essa diferença entre raiz e subdomínio está na [documentação oficial de domínios do Pages](https://developers.cloudflare.com/pages/configuration/custom-domains/). O guia não pressupõe uma zona completa conhecida nem autoriza alteração automática de DNS.

### 4. Depois de publicar

- Reenvie `sitemap.xml` no Search Console da conta do cliente e confira os canônicos. Ajuste o domínio em `sitemap.xml`, `robots.txt` e nos HTMLs se o cliente escolher outro domínio canônico.
- Confira erros 404 usando os caminhos do inventário abaixo. O HTML 404 está incluído e não há redirecionamento geral que masque páginas inexistentes.
- Ao atualizar textos ou imagens, faça novo upload do site completo e teste no endereço Pages antes de considerar a atualização concluída.
- Guarde uma cópia do pacote, da zona DNS e das configurações de publicação. O CNAME de verificação do Squarespace não é necessário para hospedar no Pages.

## Inventário completo

| Endereço original preservado | Arquivo local |
| --- | --- |
| `/` | [Saúde, cuidado e bem-estar](index.html) |
| `/clinica-reposicao-hormonal` | [Clínica de Tratamento Hormonal e Dermatologia](clinica-reposicao-hormonal/index.html) |
| `/tratamento-hormonal` | [Reposição hormonal para mulheres e homens](tratamento-hormonal/index.html) |
| `/dermatologia` | [Dermatologia](dermatologia/index.html) |
| `/hormonio-masculino` | [Tratamento Hormonal para Homem](hormonio-masculino/index.html) |
| `/hormonio-feminino` | [Tratamento Hormonal para Mulheres](hormonio-feminino/index.html) |
| `/duvidas-hormonio-feminino` | [Implante hormonal: perguntas e respostas](duvidas-hormonio-feminino/index.html) |
| `/ginecologia-obstetricia` | [Ginecologia e Obstetrícia](ginecologia-obstetricia/index.html) |
| `/omint-plano-de-saude` | [Plano de saúde Omint](omint-plano-de-saude/index.html) |
| `/contato` | [Contato](contato/index.html) |
| `/blog` | [Blog](blog/index.html) |
| `/blog/ressecamento-intimo-como-o-laser-e-a-terapia-hormonal-podem-ajudar` | [Ressecamento Íntimo: Como o Laser e a Terapia Hormonal Podem Ajudar](blog/ressecamento-intimo-como-o-laser-e-a-terapia-hormonal-podem-ajudar/index.html) |
| `/blog/ninfoplastia-tudo-o-que-voce-precisa-saber` | [Ninfoplastia: tudo o que você precisa saber](blog/ninfoplastia-tudo-o-que-voce-precisa-saber/index.html) |
| `/blog/hpv-papanicolau-cancer-de-colo-de-utero-ms-vida` | [Previna-se contra o câncer de colo de útero: estratégias efetivas](blog/hpv-papanicolau-cancer-de-colo-de-utero-ms-vida/index.html) |
| `/blog/laser-vaginal-rejuvenescimento-intimo-ms-vida` | [Laser Íntimo: Rejuvenescimento com Monalisa Touch](blog/laser-vaginal-rejuvenescimento-intimo-ms-vida/index.html) |
| `/blog/rotina-ginecologica-msvida-clinica` | [Rotina Ginecológica: Dicas Importantes da Dra. Marianna Souza](blog/rotina-ginecologica-msvida-clinica/index.html) |
| `/blog/endometriose-msvida-clinica-ginecologia` | [Endometriose: Dra. Marianna Souza explica como prevenir e tratar](blog/endometriose-msvida-clinica-ginecologia/index.html) |
| `/blog/transplante-capilar-ms-vida-higienopolis` | [Transplante Capilar: o que você precisa saber](blog/transplante-capilar-ms-vida-higienopolis/index.html) |
| `/blog/6-fatores-que-influenciam-o-desejo-sexual-da-mulher` | [6 fatores importantes para o desejo sexual feminino](blog/6-fatores-que-influenciam-o-desejo-sexual-da-mulher/index.html) |
| `/blog/como-se-preparar-para-a-maternidade-consulta-pre-gestacional` | [Como se planejar para a maternidade?](blog/como-se-preparar-para-a-maternidade-consulta-pre-gestacional/index.html) |
| `/blog/cancer-de-mama-cuidado-pele-e-cabelo` | [Câncer de mama - Como cuidar da pele e dos cabelos](blog/cancer-de-mama-cuidado-pele-e-cabelo/index.html) |
| `/blog/testosterona-sintomas-beneficios` | [Reposição de Testosterona em mulheres - Sintomas, benefícios e tratamento](blog/testosterona-sintomas-beneficios/index.html) |
| `/blog/reposicao-hormonal-testosterona` | [Hormônio masculino - Reposição de Testosterona para uma melhor saúde sexual](blog/reposicao-hormonal-testosterona/index.html) |
| `/blog/dicas-para-combater-o-frizz-no-cabelo` | [Dermatologia - Como eliminar o frizz nos cabelos](blog/dicas-para-combater-o-frizz-no-cabelo/index.html) |
| `/blog/microagulhamento-capilar-para-combater-a-queda-de-cabelo` | [Microagulhamento capilar no combate a queda de cabelo](blog/microagulhamento-capilar-para-combater-a-queda-de-cabelo/index.html) |
| `/blog/reposicao-hormonal-para-a-longevidade` | [Os hormônios e a longevidade](blog/reposicao-hormonal-para-a-longevidade/index.html) |
| `/blog/tipos-de-mascara-para-cabelos` | [Máscaras para cabelo - Qual a melhor opção para o seu cabelo](blog/tipos-de-mascara-para-cabelos/index.html) |
| `/blog/dicas-de-alimentacao-e-cuidado-com-o-corpo` | [Cuidados com a pele durante o inverno - Dicas de alimentação e cuidado com o corpo](blog/dicas-de-alimentacao-e-cuidado-com-o-corpo/index.html) |
| `/blog/dermatologia-envelhecimento-da-pele` | [Dermatologia - Como prevenir o envelhecimento da pele](blog/dermatologia-envelhecimento-da-pele/index.html) |
| `/blog/qual-protetor-ideal-para-a-minha-pele` | [Dermatologia - Qual protetor ideal para a minha pele?](blog/qual-protetor-ideal-para-a-minha-pele/index.html) |
| `/blog/dermatologia-produtos-antioxidantes` | [Cuidados com a pele - Aposte em ativos antioxidantes](blog/dermatologia-produtos-antioxidantes/index.html) |
| `/e-book-guia-cuidados-com-a-pele-` | [Guia básico de cuidados com a pele](e-book-guia-cuidados-com-a-pele-/index.html) |
| `/download-ebook-guia-de-pele` | [Guia básico de cuidados com a pele — leitura](download-ebook-guia-de-pele/index.html) |
| `/ebook-cuidados-com-os-cabelos` | [Cuidados com os cabelos](ebook-cuidados-com-os-cabelos/index.html) |
| `/download-ebook-guia-cabelos` | [Cuidados com os cabelos — leitura](download-ebook-guia-cabelos/index.html) |
| `/ebook-implante-hormonal-perguntas-respostas` | [Implante hormonal: guia de primeira consulta](ebook-implante-hormonal-perguntas-respostas/index.html) |
| `/download-ebook-guia-1-consulta-implante` | [Implante hormonal: guia de primeira consulta — leitura](download-ebook-guia-1-consulta-implante/index.html) |
| `/lead-cadastro-newsletter` | [Newsletter](lead-cadastro-newsletter/index.html) |
