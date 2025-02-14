function copyContract() {
    const contractAddress = document.getElementById('contract-address');
    contractAddress.select();
    contractAddress.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(contractAddress.value).then(() => {
        alert("Contract address copied to clipboard!");
    });
}
