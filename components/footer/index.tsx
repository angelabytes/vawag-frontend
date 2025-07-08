export default function HFooter() {
  return (
    <footer className="w-full bg-[linear-gradient(45deg,var(--sage-green),var(--deep-sage))] text-white p-8 text-center shadow-inner">
      <div className="container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} Hiwahiwa. All rights reserved.</p>
      </div>
    </footer>
  );
}
