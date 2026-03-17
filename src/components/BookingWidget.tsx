import BookingForm from '@/components/booking/BookingForm';

export default function BookingWidget() {
  return (
    <section id="booking" className="relative z-20 -mt-8 px-4 pb-12">
      <div className="max-w-5xl mx-auto bg-white shadow-xl p-6 md:p-8">
        <BookingForm variant="light" />
      </div>
    </section>
  );
}
