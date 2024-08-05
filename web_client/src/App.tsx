import RecitalBox from "./components/RecitalBox";
import { Document } from "./models";

const TEMP_EXAMPLE_TEXT = `רקע

לצ'ילה מסורת ארוכה של כרייה שהפכה אותה ליצרנית הנחושת הגדולה בעולם. מאז שנת 2000 מתו כ-34 איש בשנה בממוצע בתאונות כרייה בצ'ילה, כשהשיא היה 43 הרוגים ב-2008, על פי נתונים מ"השירות הלאומי לגאולוגיה ולכרייה" (Servicio Nacional de Geología y Minería de Chile).


המכרה שבו התרחשה התאונה הוא בבעלות "חברת הכרייה של סן אסטבן" (Compañía Minera San Esteban), הידועה לשמצה בשל התפעול הבלתי בטיחותי שמתבצע במכרות שבבעלותה. על פי נתונים מ"אגודת הבטיחות של צ'ילה" (Asociación Chilena de Seguridad), שמונה כורים מצאו את מותם במכרה סן חוסה ב-12 השנים שקדמו לתאונה. השירות הלאומי לגאולוגיה וכרייה קנס את החברה 42 פעמים בשש השנים שקדמו לתאונה על הפרת כללי בטיחות. ב-2007 נסגר המכרה באופן זמני, כאשר קרובי משפחתו של כורה שנהרג בתאונה הגישו תביעה כנגד החברה, אך ב-2008 נפתח המכרה מחדש, אף על פי שתנאי העבודה במכרה עדיין לא עמדו בכללי הבטיחות, סוגיה שנותרה תחת חקירה בפיקוחו של הסנאטור הצ'יליאני, בלאדו פרוקריקה. עקב אילוצים תקציביים, נותרו רק שלושה פקחים שהיו אחראים על 884 המכרות של אזור אטקמה בתקופה שקדמה לתאונה.


טרם התאונה, התעלמה החברה מאזהרות על תנאי עבודה בלתי בטיחותיים במכרותיה. על פי חאבייר קסטייו, מזכיר האיגוד המקצועי שייצג את כורי סן חוסה, הנהלת החברה פעלה "מבלי להקשיב לקולותיהם של העובדים כאשר הם דיברו על הסיכונים שבעבודתם". "אף אחד לא מקשיב לנו. ואז הם אומרים שאנו צודקים. אם הם היו מאמינים לעובדים, לא היינו מקוננים כעת" אמר חררדו נונייס, מנהיג האיגוד המקצועי במכרה קנדלריה נורטה הסמוך.


פועלי מכרות הנחושת הצ'יליאנים נמצאים בראש סולם שכר הכורים ביבשת דרום אמריקה. בעקבות התאונה עלה נושא הבטיחות במכרות לדיון ציבורי. אמנם התרחשותן של תאונות רציניות במכרות גדולים היא נדירה, במיוחד במכרות של חברות הכרייה שבבעלות הממשלה, אך לעומת זאת, תנאי הבטיחות במכרות קטנים יותר כמו זה של קופיאפו, פחות טובים. רמת השכר במכרה סן חוסה הייתה גבוהה בכ-20% בהשוואה למכרות אחרים בצ'ילה, בשל רמת הבטיחות הלקויה בו.


התאונה

המידע הראשוני

מפולת הסלעים אירעה בשעה 14:00 (זמן מקומי) ב-5 באוגוסט 2010. ביום התאונה, פרסם מוקד החירום הלאומי במשרד הפנים הצ'יליאני (Oficina Nacional de Emergencias del Ministerio del Interior) את שמותיהם של 33 הכורים הלכודים, שעליהם נמנה הכדורגלן הצ'יליאני לשעבר, פרנקלין לובוס. כל הכורים הם בעלי אזרחות צ'יליאנית, מלבד קרלוס מאמאני הבוליביאני. בעת התרחשות האסון, שהה שר המכרות הצ'יליאני, לורנס גולבורן, באקוודור וב-7 באוגוסט הוא הגיע לאתר.


כאשר התרחשה ההתמוטטות, שהו שתי קבוצות של כורים במכרה. הקבוצה ששהתה סמוך לכניסת המכרה הצליחה להימלט החוצה ללא פגע. הקבוצה השנייה שמנתה 33 כורים הייתה במעמקי המכרה, והיו בה כמה מכונאי רכב שהיו עובדי קבלן שלא נמנו עם העובדים הקבועים בעומק זה. ענן אבק סמיך שנגרם ממפולת הסלעים סימא את עיני הכורים במשך כמעט שש שעות וגרם לגירויים קשים ולכוויות ממושכות בעיניהם.


הקבוצה הלכודה

הכורים הלכודים ניסו להימלט תחילה דרך מערכת פירי האוורור, אך במכרה לא היו מותקנים סולמות מילוט, שהיו תנאי בטיחותי של הרשויות לפתיחת המכרה מחדש לאחר שנסגר. פירים אלה הפכו מאוחר יותר לבלתי נגישים עקב תזוזות הקרקע שמנעו מצוותי החילוץ לעשות בהם שימוש. חלקים רבים של המכרה היו בני יותר ממאה שנה והגישה לאזורים העמוקים של המכרה הייתה דרך נתיב ארוך, תלול ומפותל ולא באמצעות פירים אנכיים ומערכת מעליות. לואיס אורסואה, מנהל המשמרת הלכוד, הבין את חומרת המצב ואת הקשיים בארגון ניסיון החילוץ. הוא כינס את אנשיו בחלל בטוח וארגן אותם ואת משאבי החיים הדלים שהיו ברשותם כדי להבטיח תנאי שרידות ארוכים ככל האפשר. בהוראתו של אורסואה, נכנסו הכורים הלכודים למשטר קיצוב ותזונתם כללה שתי כפות טונה וחצי כוס חלב ל-48 שעות. הכורים המנוסים בקבוצה נשלחו מחוץ לחלל הבטוח כדי לבצע הערכת מצב, ועל האנשים בעלי המיומנויות החיוניות הוטלו תפקידי מפתח.`

const TEMP_EXAMPLE_DOC = Document.fromText(TEMP_EXAMPLE_TEXT);

function App() {
  return (
    <div className="flex h-screen w-full flex-row justify-center bg-slate-400">
      <div className="m-5 flex w-full flex-col items-center justify-center border-2 border-black bg-slate-200">
        <div className="m-10 text-2xl">מערכת הקראת המונים</div>
        <RecitalBox document={TEMP_EXAMPLE_DOC} />
      </div>
    </div>
  );
}

export default App;
