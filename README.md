# MaterialExpresssionEditor
    Library for editing mathematic expression using Angular Material.
    Feel free to improve this library.

# 1 Installation & Setup
npm install material-custom-editor
Import CustomEditorLibraryModule in app.module.ts (under @NgModule at imports: [...])

# 2 Usage
    <lib-material-custom-editor>

    @Input:
    - expression: string with an existing expression (optional) 
    - variables: list of objects to be added to expression with two string properties: name and value (ex:{ name: 'var1', value: '1' }) 
    - customFunctions: list of objects to be added to exprssion with two string properties: name and value (ex: { name: 'func', value: '2*var1' } ) 
    - fixedFunctions: list of objects to be added to exprssion with two string properties: name and value (ex: { name: 'Max', value: 'Max( , )' } ) 
    - language: string with language code in compliance with ISO Language Code Table.

    @Output: 
    - cancelEvent: event triggerd at cancellation. - submitEvent: event triggerd at submit with the expression string submitted.
# 4 Repository
    https://github.com/tarceaalex/MaterialExpressionEditor    

# 3 License
    NO