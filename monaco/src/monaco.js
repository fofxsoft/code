import "monaco-editor/esm/vs/editor/browser/controller/coreCommands";
import "monaco-editor/esm/vs/editor/browser/widget/codeEditorWidget";
import "monaco-editor/esm/vs/editor/browser/widget/diffEditorWidget";
import "monaco-editor/esm/vs/editor/browser/widget/diffNavigator";

import "monaco-editor/esm/vs/editor/contrib/bracketMatching/bracketMatching";
import "monaco-editor/esm/vs/editor/contrib/caretOperations/caretOperations";
import "monaco-editor/esm/vs/editor/contrib/caretOperations/transpose";
import "monaco-editor/esm/vs/editor/contrib/clipboard/clipboard";
import "monaco-editor/esm/vs/editor/contrib/comment/comment";
import "monaco-editor/esm/vs/editor/contrib/contextmenu/contextmenu";
import "monaco-editor/esm/vs/editor/contrib/find/findController";
import "monaco-editor/esm/vs/editor/contrib/folding/folding";
import "monaco-editor/esm/vs/editor/contrib/format/formatActions";
import "monaco-editor/esm/vs/editor/contrib/gotoError/gotoError";
import "monaco-editor/esm/vs/editor/contrib/hover/hover";
import "monaco-editor/esm/vs/editor/contrib/inPlaceReplace/inPlaceReplace";
import "monaco-editor/esm/vs/editor/contrib/linesOperations/linesOperations";
import "monaco-editor/esm/vs/editor/contrib/smartSelect/smartSelect";
import "monaco-editor/esm/vs/editor/contrib/suggest/suggestController";
import "monaco-editor/esm/vs/editor/contrib/wordHighlighter/wordHighlighter";
import "monaco-editor/esm/vs/editor/contrib/wordOperations/wordOperations";

import "monaco-editor/esm/vs/editor/standalone/browser/accessibilityHelp/accessibilityHelp";
import "monaco-editor/esm/vs/editor/standalone/browser/inspectTokens/inspectTokens";
import "monaco-editor/esm/vs/editor/standalone/browser/iPadShowKeyboard/iPadShowKeyboard";
import "monaco-editor/esm/vs/editor/standalone/browser/quickOpen/quickOutline.js";
import "monaco-editor/esm/vs/editor/standalone/browser/quickOpen/gotoLine.js";
import "monaco-editor/esm/vs/editor/standalone/browser/quickOpen/quickCommand.js";

import * as monaco from "monaco-editor/esm/vs/editor/editor.api";

import "monaco-editor/esm/vs/language/typescript/monaco.contribution";
import "monaco-editor/esm/vs/language/css/monaco.contribution";
import "monaco-editor/esm/vs/language/json/monaco.contribution";
import "monaco-editor/esm/vs/language/html/monaco.contribution";

import "monaco-editor/esm/vs/basic-languages/css/css.contribution";
import "monaco-editor/esm/vs/basic-languages/html/html.contribution";
import "monaco-editor/esm/vs/basic-languages/sql/sql.contribution";
import "monaco-editor/esm/vs/basic-languages/mysql/mysql.contribution";
import "monaco-editor/esm/vs/basic-languages/xml/xml.contribution";
import "monaco-editor/esm/vs/basic-languages/csharp/csharp.contribution";
import "monaco-editor/esm/vs/basic-languages/vb/vb.contribution";

import * as editorWorker from "monaco-editor/esm/vs/editor/editor.worker.js";
import * as cssWorker from "monaco-editor/esm/vs/language/css/css.worker";
import * as htmlWorker from "monaco-editor/esm/vs/language/html/html.worker";
import * as jsonWorker from "monaco-editor/esm/vs/language/json/json.worker";
import * as typescriptWorker from "monaco-editor/esm/vs/language/typescript/ts.worker.js";

const workerURL = {
    css: cssWorker,
    html: htmlWorker,
    json: jsonWorker,
    javascript: typescriptWorker,

    get typescript() {
        return this.javascript;
    },
};

Object.setPrototypeOf(workerURL, null);

window.MonacoEnvironment = {
    getWorkerUrl: (_, label) => workerURL[label] || editorWorker,
};

export default monaco;
