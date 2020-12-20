const app = new Vue({
    el: '.main-container',
    data: {
        notices: [
            {
                photo: 'https://images.pexels.com/photos/4276086/pexels-photo-4276086.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                photoAuthor: 'https://www.pexels.com/@marco-allasio-2733664',
                title: 'Incêdios Australia',
                description: 'Os incêndios florestais sem precedentes que devastaram a Austrália no fim de 2019 e começo de 2020 mataram ou desalojaram quase 3 bilhões de animais',
                link: 'https://www.dw.com/pt-br/inc%C3%AAndios-na-austr%C3%A1lia-afetaram-quase-3-bilh%C3%B5es-de-animais-afirma-estudo/a-54350188',
                hashtag: 'AMBIENTE'
            },
            {
                photo: 'https://s2.glbimg.com/0cU8C9gWUe5MgqrH9bOvHoMieQ4=/0x0:3413x2272/984x0/smart/filters:strip_icc()/s.glbimg.com/es/ge/f/original/2016/04/13/gettyimages-521020376.jpg',
                photoAuthor: 'Getty Images ',
                title: 'Kobe Bryant',
                description: 'Sem descrições para essa nóticia que colocou em shock o mundo.',
                link: 'https://globoesporte.globo.com/basquete/nba/noticia/cerimonia-que-eternizara-kobe-bryant-no-hall-da-fama-do-basquete-e-marcada-para-maio.ghtml',
                hashtag: 'RIP'
            },
            {
                photo: 'https://medias.cnnbrasil.com.br/principe-harry-e-meghan-markle-participam-de-compromisso-oficial-em-westminster.jpeg?format=WEBP&image=https://mediastorage.cnnbrasil.com.br/IMAGES/00/00/00/2130_A0A47C3671367C31.jpg&width=804',
                photoAuthor: 'Foto: Henry Nicholls - 09.mar.2020/ Reuters',
                title: 'A saída de Harry e Meghan Markle da realeza',
                description: 'O casal anuncia a revoga dos seus cargos face à monarquia britânica assim como de todos os encargos financeiros. Após uma grande especulação, a Rainha Elizabeth declara que concorda com a decisão tomada pelo neto e pela sua esposa e que ambos podem sempre contar com a casa real.',
                link: 'https://globoesporte.globo.com/basquete/nba/noticia/cerimonia-que-eternizara-kobe-bryant-no-hall-da-fama-do-basquete-e-marcada-para-maio.ghtml',
                hashtag: 'REALEZA'
            },
            {
                photo: 'https://images.pexels.com/photos/4552844/pexels-photo-4552844.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                photoAuthor: 'https://www.pexels.com/@kelly-lacy-1179532',
                title: 'Black Lives Matter',
                description: 'Uma série de protestos do movimento Black Lives Matter após várias injustiças policiais acontecendo contra pessoas com tom de pele negra nos EU e se espalhando pelo mundo a fora.',
                link: 'https://pt.wikipedia.org/wiki/Black_Lives_Matter',
                hashtag: 'BLM'//007dba, 00b385
            },
            {
                photo: 'https://s2.glbimg.com/0cU8C9gWUe5MgqrH9bOvHoMieQ4=/0x0:3413x2272/984x0/smart/filters:strip_icc()/s.glbimg.com/es/ge/f/original/2016/04/13/gettyimages-521020376.jpg',
                photoAuthor: 'Getty Images ',
                title: 'WTF',
                description: 'Diferente do habitual, Bryant não passou pelo processo de votação para receber tal honraria. Morto em um acidente de helicóptero que também vitimou sua filha Gianna e outras setes pessoas no início do ano, apesar de estar na lista dos possíveis elegíveis, ele foi automaticamente incluído no Hall. O evento de maio de 2021 será uma homenagem póstuma para Mamba. ',
                link: 'https://globoesporte.globo.com/basquete/nba/noticia/cerimonia-que-eternizara-kobe-bryant-no-hall-da-fama-do-basquete-e-marcada-para-maio.ghtml',
                hashtag: 'FOME'
            }
        ]
    }
})