const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */

let originalSettings = {};

vscode.commands.registerCommand('htl-vscode-settings.enable', activate);
// vscode.commands.registerCommand('htl-vscode-settings.disable', deactivate );

function activate() {
  const config = vscode.workspace.getConfiguration();

  originalSettings.editor = config.get('editor');
  originalSettings.prettier = config.get('prettier');

  config.update('prettier.singleQuote', true, true);
  config.update('prettier.bracketSpacing', true, true);
  config.update('prettier.trailingComma', 'all', true);
  config.update('prettier.printWidth', 100, true);
  config.update('prettier.endOfLine', 'auto', true);
  config.update('prettier.arrowParens', 'always', true);
  config.update('prettier.jsxSingleQuote', true, true);
  config.update('prettier.useEditorConfig', false, true);

  config.update('defaultFormatter', 'esbenp.prettier-vscode', true);
  config.update('files.autoSave', 'afterDelay', true);

  config.update('editor.formatOnSave', true, true);
  config.update('editor.formatOnPaste', true, true);
  config.update('editor.wordWrap', 'off', true);
  config.update('editor.tabSize', 2, true);
  config.update('editor.detectIndentation', false, true);
  config.update('editor.minimap.enabled', false, true);
  config.update('editor.occurrencesHighlight', false, true);
  config.update('editor.quickSuggestions', { strings: true }, true);
  config.update('editor.guides.bracketPairs', true, true);
  config.update('editor.cursorStyle', 'line', true);
  config.update('editor.cursorWidth', 2, true);
  config.update('editor.cursorBlinking', 'blink', true);
  config.update('editor.fontWeight', '400', true);
  config.update('editor.mouseWheelZoom', true, true);
  config.update('editor.renderWhitespace', 'none', true);
  config.update('editor.suggestSelection', 'first', true);
  config.update('editor.guides.indentation', false, true);

  vscode.window.showInformationMessage('Your settings have been updated!');
}

function resetSettings() {
  const config = vscode.workspace.getConfiguration();

  config.update('prettier', originalSettings.prettier, true);
  config.update('editor', originalSettings.editor, true);

  config.update('defaultFormatter', undefined, true);
}

function deactivate() {
  resetSettings();
}

function uninstall() {
  resetSettings();
}

module.exports = {
  activate,
  deactivate,
  uninstall,
};
