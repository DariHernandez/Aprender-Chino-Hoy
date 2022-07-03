function show_alert () {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    var thanks = urlParams.get('thanks')
    if (thanks) {
        
        // Create alert
        Swal.fire('Gracias.', 'Te contactaremos lo antes posible')

        // Redirect
        window.location.href = "#header"
    }
}

show_alert ()