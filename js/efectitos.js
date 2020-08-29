window.addEventListener('load', () => {
	setEfectitos();
	window.addEventListener('scroll', () => {
		setEfectitos();
	});
});

function setEfectitos() {
	setEfecto( 'fade-in' );

    setEfecto( 'slide-left' );
    
    setEfecto( 'slide-right' );

    setEfecto( 'slide-up' );

    setEfecto( 'slide-down' );

    setEfecto( 'zoom-in' );

    setEfecto( 'tembleque-y' );
}

function setEfecto( slug ) {
    const elemento = document.querySelectorAll('.efecto-' + slug );
	const lengthEl = elemento.length;
	for ( let index = 0; index < lengthEl; index++ ) {
		const element = elemento[index];

		if ( isInViewport( element ) ) {
            setTimeout( function() {
                element.classList.add( slug + '-animation' );
            }, 700 );
		}
	}
}
	

function isInViewport( elto ) {
	const anchoViewport = window.innerWidth || document.documentElement.clientWidth;
    const alturaViewport = window.innerHeight || document.documentElement.clientHeight;

    const caja = elto.getBoundingClientRect();
    const cajaDentroH = ( caja.left >= 0 && caja.left <= anchoViewport ) ||
                    ( caja.right >= 0 && caja.right <= anchoViewport );
    const cajaDentroV = ( caja.top >= alturaViewport / 2 && caja.top <= alturaViewport ) ||  
                    ( caja.bottom >= alturaViewport / 2 && caja.bottom <= alturaViewport );  
    return ( cajaDentroH && cajaDentroV );
}
